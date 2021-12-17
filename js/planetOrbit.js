class PlanetOrbit{
    
    constructor(body, name){
        this.name = name;
        this.body = body;
        this.G = 6.67408e-20 / 1e12;
        this.M = 1.989e30;
        this.GM = this.G * this.M;
        this.dt = 1e1;
    }

    setInit(){
        this.r = this.a * (1 - this.epsilon);
        this.r_p = 0;
        this.theta = 0;
        this.L_z = Math.sqrt(this.GM * ( this.m**2 ) * (1 - (this.epsilon ** 2)) * this.a);
    }

    getCriticalCondition(){
        let v_theta = (this.theta - this.pre_theta) / this.dt;
        let D1 = this.m * v_theta **2 / 2;
        let D2 = this.GM * this.m / (2*this.r);
        let D3 = this.GM * this.m / this.r;
        console.log(`${this.name}: D (${D2 - D1}, ${D3 - D1})`);
    }

    update(){

        for (let i = 0; i < 1e3; i++){
            this.pre_r = this.r;
            this.pre_r_p = this.r_p;
            this.pre_theta = this.theta;
    
            this.r = this.pre_r_p * this.dt + this.pre_r;
            this.r_p = ((this.L_z ** 2)/((this.m ** 2) * (this.pre_r ** 3)) - this.GM/(this.r**2)) * this.dt + this.pre_r_p;
            this.theta = (this.L_z / (this.m * this.pre_r ** 2)) * this.dt + this.pre_theta;
        }

        let x = this.r * Math.cos(this.theta);
        let y = this.r * Math.sin(this.theta);

        this.body.position.x = x / 1e3;
        this.body.position.z = y / 1e3;
    }
}

class MercuryOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Mercury");
        this.m = 3.3e23;
        this.a = 5.79e7 / 1e4;
        this.epsilon = 0.205;
        this.setInit();
    }
}

class VenusOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Venus");
        this.m = 4.87e24;
        this.a = 1.082e8 / 1e4;
        this.epsilon = 0.007;
        this.setInit();
    }
}

class EarthOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Earth");
        this.m = 5.97e24;
        this.a = 1.49e8 / 1e4;
        this.epsilon = 0.0167;
        this.setInit();
    }
}

class MarsOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Mars");
        this.m = 6.42e23;
        this.a = 2.279e8 / 1e4;
        this.epsilon = 0.094;
        this.setInit();
    }
}

class NeptuneOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Neptune");
        this.m = 1.024e26;
        this.a = 4.495e9 / 1e4;
        this.epsilon = 0.0113;
        this.setInit();
    }
}

class JupiterOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Jupiter");
        this.m = 1.495e27;
        this.a = 7.78e8 / 1e4;
        this.epsilon = 0.049;
        this.setInit();
    }
}

class SaturnOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Saturn");
        this.m = 5.68e26;
        this.a = 1.433e9 / 1e4;
        this.epsilon = 0.057;
        this.setInit();
    }
}

class UranusOrbit extends PlanetOrbit{
    constructor(body){
        super(body, "Uranus");
        this.m = 8.68e25;
        this.a = 2.872e9 / 1e4;
        this.epsilon = 0.046;
        this.setInit();
    }
}

