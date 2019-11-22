import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    render() {
        let nameChecked = this.props.nameChecked;
        let ageChecked = this.props.ageChecked;
        let newPeople = this.people.slice();

        if (nameChecked) {
            newPeople.sort((a,b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            });
        }

        if (ageChecked) {
            newPeople.sort((a,b) => {
                return new Date(b.dob) - new Date(a.dob);
            });
        }

        // console.log(newPeople);

        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                                        newPeople.map((p,i) => {
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell>{p.name}</TableCell>
                                                    <TableCell>{p.dob}</TableCell>
                                                </TableRow>
                                            );
                                        })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
