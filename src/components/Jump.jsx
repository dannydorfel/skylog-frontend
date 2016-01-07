import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

const {Card, CardHeader, CardActions, CardMedia, CardTitle, CardText} = require('material-ui/lib/card');
const FlatButton = require('material-ui/lib/flat-button');
const Colors = require('material-ui/lib/styles/colors');

export const Jump = React.createClass({
    mixins: [PureRenderMixin],

    render: function() {
        var jump = this.props.jump.toJS();
        return (
            <Card>
                <CardHeader
                    title={jump.location.name}
                    subtitle={<div><span style={{color: Colors.darkBlack}}>{jump.aircraft.name}</span> - <span>{jump.type.name}</span>{jump.comment ? <span> - {jump.comment}</span> : ''}</div>}
                    avatar={<span>{jump.number}</span>}/>
                <CardTitle title="Title" subtitle="Subtitle"/>

                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
});

function mapStateToProps(state) {
    return {
        jump: state.jumps.get('jump')
    };
}

export const JumpContainer = connect(mapStateToProps)(Jump);