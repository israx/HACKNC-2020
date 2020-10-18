import React, {Component} from 'react';
import PropTypes from 'prop-types';

// not in use
let dialogueStyle = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogueClose = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

class Dialogue extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }
    
        return(
            <div className = "dialogue" style={{dialogueStyle}}>
                {this.props.children}

                <div className = "exit" style={dialogueClose}>
                    <button onClick = {this.props.show}>X</button>
                </div>
            </div>
        );
    }
}

Dialogue.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};


export default Dialogue;