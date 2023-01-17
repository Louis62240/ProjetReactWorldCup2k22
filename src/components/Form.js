import React from "react";

class Form extends React.Component {
    onClique(event)
    {
        alert('Formulaire envoyé !');
        event.preventDefault();
    }
    render() {
        return(
            <>
            <form action="/" className="Form" onSubmit={this.onClique}>
            <label>Texte</label>
            <input type="text" name="lastname" defaultValue=""/>
            <input type="submit" value="Envoyer"/>
            </form>
            <p>Bonjour à tous et cliquez <span onClick={this.onClique}>ICI</span>
            Il est {new Date().toLocaleTimeString()}.</p>
            </>
        )
    }
}

export default Form;