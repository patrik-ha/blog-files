class SearchModel {
    // each town has a specified id, ranging from 1 to 10
    public town: number;
    // between 1 and 30
    public range: number;
    // either true or false
    public bringLeash: boolean;
    // either true, false, or null
    public bringWater: boolean | null;
}

class Encoder {
    readonly charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".toLowerCase();
    // this needs to be set so that 2^blockSize is equal to the base
    readonly blockSize = 5;

    encode(model: SearchModel): string {
        // this should concatenate your parameters into a single bit-string
        // need to remember to pad all the chunks so that they always are the same size
        // e.g. if 11111 is the largest, then you need to assure that zero is represented as 00000 (and not just 0)
        let bitString = model.town.toString(2).padStart(4, "0")
                                  .concat(model.range.toString(2).padStart(5, "0"))
                                  .concat(model.bringLeash ? "1" : "0")
                                  .concat(this.asBitString(model.bringWater));
        // pad to closest multiple of blocksize
        bitString = bitString.padEnd(this.blockSize * Math.ceil(bitString.length/this.blockSize), "0");
        
        let result = "";
        // split into blocks of five, and find the corresponding value to the bitstring-block
        for(var i = 0; i < bitString.length; i += this.blockSize) {
            let block = bitString.slice(i, i + this.blockSize);
            result = result.concat(this.charset[parseInt(block, 2)]);
        }
        return result;
    }

    decode(base32String: string): SearchModel {
        // split into an array, map from base32-values to bit-values, 
        // then join into string (and pad to closest multiple of 5)
        let bitString = base32String.split("")
                                    .map(x => (this.charset.indexOf(x)).toString(2).padStart(this.blockSize, "0"))
                                    .join("")
                                    .padEnd(15, "0");
        // as previously mentioned: 00, 01, 10, 11
        let nullableBooleanLookup = [false, true, null, null];
        return {
            // first four bits is the selected town (by id)
            town: parseInt(bitString.slice(0, 4), 2),
            // next five is range (0-30)
            range: parseInt(bitString.slice(4, 9), 2),
            // next (single boolean)
            bringLeash: bitString[9] === "1",
            // using integer-value of bitstring to assign the correct (nullable) boolean-value
            bringWater: nullableBooleanLookup[parseInt(bitString.slice(10, 12), 2)],
        };
    }

    // helper
    private asBitString(value: boolean | null): string {
        switch(value) {
            case false:
                return "00";
            case true:
                return "01";
            case null:
                return "10";
        }
    }
}
