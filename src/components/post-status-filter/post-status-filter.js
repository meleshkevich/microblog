import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All posts'},
            {name: 'like', label: 'Liked posts'}
        ]
    }
    render() {
        const buttons = this.buttons.map( ({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const btnColor = active ? 'info' : 'secondary'
            return (
                <Button 
                key = {name} 
                color= {btnColor} 
                onClick= { () => onFilterSelect(name)}
                >
                {label} 
                </Button>
            )
        });

        return (
            <div className='btn-group'>
             { buttons }
            </div>
        )
    }
}