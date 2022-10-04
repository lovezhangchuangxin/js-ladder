class Immortal {
    // 生命值
    private _hp = 100;
    // 攻击力
    private _atk = 10;
    // 防御力
    private _def = 10;
    // 速度
    private _spd = 1;
    // 魂力
    private _soul = 10;
    // 灵力
    private _reiki = 10;
    // x坐标
    private _x = 0;
    // y坐标
    private _y = 0;

    get hit() {
        return this._hp;
    }

    get atk() {
        return this._atk;
    }

    get def() {
        return this._def;
    }

    get spd() {
        return this._spd;
    }

    get soul() {
        return this._soul;
    }

    get reiki() {
        return this._reiki;
    }
}

export default Immortal;