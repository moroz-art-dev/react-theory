import React from "react";
import styles from './Car.css';
import withClass from '../hoc/withClass'
import {ReactComponent} from "*.svg";

class Car extends React.Component {

    render() {

        const inputClasses = [styles.input];

        if (this.props.name !== ""){
            inputClasses.push(styles.green)
        } else {
            inputClasses.push(styles.red)
        }

        if (this.props.name.length > 4){
            inputClasses.push(styles.bold)
        }

        return (
            <div className={styles.Car}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car