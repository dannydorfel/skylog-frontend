import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

import * as actionCreators from '../actions/jumps';

import { List, ListDivider, ListItem } from 'material-ui/lib/lists';
import Paper from 'material-ui/lib/paper';

import Colors from 'material-ui/lib/styles/colors'

var SelectableList = SelectableContainerEnhance(List);

export const JumpList = React.createClass({
    handleUpdateSelectedIndex: function(e, index) {
        var jumpId = this.props.jumps.get(index - this.props.jumps.size).get('id');
        this.props.selectJump(index, jumpId);
        //this.props.requestJump(this.props.jumps.get(index - this.props.jumps.size).get('id'));
    },

    render: function() {
        const groups = this.props.jumps.groupBy(item => { return item.get('date') });
        const currentJumpId = this.props.selected;
        let index = 0;

        return (
            <div>
                {groups.entrySeq().map(group =>
                    <Paper key={group[0]} style={{marginTop: "10px", marginBottom: "10px"}}>
                        <SelectableList
                            valueLink={{
                                value: currentJumpId,
                                requestChange: this.handleUpdateSelectedIndex}}
                            subheader={group[0]}>
                            {group[1].map(entry =>
                                <ListItem
                                    key={entry.get('number')}
                                    value={index++}
                                    leftAvatar={<span style={{top: "20px"}}>{entry.get('number')}</span>}
                                    primaryText={entry.get('location')}
                                    secondaryText={<div><span style={{color: Colors.darkBlack}}>{entry.get('airplane')}</span> - <span>{entry.get('jumpType')}</span>{entry.get('comment') ? <span> - {entry.get('comment')}</span> : ''}</div>}
                                    secondaryTextLines={1} />
                            )}
                        </SelectableList>
                    </Paper>
                )}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        jumps: state.jumps.get('jumps'),
        jump: state.jumps.get('jump'),
        selected: state.jumps.get('selected', null)
    };
}

export const JumpListContainer = connect(mapStateToProps, actionCreators)(JumpList);