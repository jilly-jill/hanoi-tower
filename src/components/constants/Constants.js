const TTL_TWRS = 3;
const WD_TWR = `${30 * TTL_TWRS}px`;
const HT_HD = "8rem";
const HT_FT = "2rem";
const HT_HAN = `(100vh - ${HT_HD} - ${HT_FT})`;
const HT_TWR = `(${WD_TWR} * ${TTL_TWRS}) * 1.3`;
const HT_TILE = `(${HT_TWR} / 12)`;

const getWidth = () => {
    switch (TTL_TWRS) {
        case 1:
            return 13;
        case 2:
            return 10.5;
        case 3:
            return 8;
        default:
            return 3;
    }
};

const WD_TILE_BS = getWidth;

export default {
    WD_TWR,
    HT_HD,
    HT_FT,
    HT_HAN,
    HT_TWR,
    HT_TILE,
    WD_TILE_BS,
    TTL_TWRS
};