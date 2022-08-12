 class Contact {
    nombre = "";
    apellido = "";
    email = "";
    connected = true

    constructor({nombre , apellido , email , connected}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.connected = connected
    }
};

export default Contact;