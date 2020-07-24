/*
    MaterialPoint class is a template for physical idea of a material point. 
    It has a mass (m), position vector (rtd0), velocity vector (rtd1), 
    acceleration vector (rtd2), and higher order time derivatives of the position
    vector (rtd3 and rtd4). They can also have radii, currently only for visual
    purposes, it is drawn as a circle of given radius and color;

    The force variable holds the resulting force from other material points and 
    environment;

    Two types of material points are implemented:
        type = 0 --- standard material point, it can move and interact with other
                     material points;
        type = 1 --- virtual material point, it can move, but does not interact
                     with other material points. They serve as frames of reference;
*/
class MaterialPoint {
    constructor(m=1, x=0, y=0, vx=0, vy=0, type=0) {
        this.m = m;
        this.rtd0 = createVector(x, y);
        this.rtd1 = createVector(vx, vy);
        this.rtd2 = createVector(0, 0);
        this.rtd3 = createVector(0, 0);
        this.rtd4 = createVector(0, 0);
        this.force = createVector(0, 0);
        this.type = type;
        this.radius = 10;
        this.color = color(0, 0, 0);
    }
}


class World {
    constructor(Lx, Ly) {
        this.world_size = createVector(Lx, Ly);        
        this.particles = [];
        this.t = 0;
        this.dt = 0.01;
        this.origin = new MaterialPoint(m=0, x=this.world_size.x/2, y=this.world_size.y, type=1);
        this.particles.push(this.origin);
        this.gravity = 6.67408e-11;
        this.isGravityOn = false;
        this.canvas = createGraphics(this.world_size.x, this.world_size.y, 'P2D');
    }


}