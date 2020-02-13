import React, { Component } from 'react';

import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button'

export default class reqForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectName : "",
            region : "",
            productionPlan : "",
            scLead : [],
            spFile : false,
            commments : ""
        }
    }

    onChange(fieldName,value){
        this.setState({
            [fieldName] : value
        });
    }

    render() {
        return (
            <div className="reqForm">
                <h2>Create New Request</h2>
                <form>
                    <Field>
                        <Label>Project Name</Label>
                        <Control>
                            <Input id="pname" value={this.state.projectName} onChange={(value) => this.onChange('projectName',value)} placeholder="Project Name" />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Region</Label>
                        <Control>
                            <Select>
                                <option>Automobile</option>
                                <option>Automobile 2</option>
                                <option>Automobile 3</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label>Production Plan</Label>
                        <Control>
                            <Checkbox>Saleable Inventory / Parent Seed availability</Checkbox>
                        </Control>
                        <Control>
                            <Checkbox>Productivity</Checkbox>
                        </Control>
                        <Control>
                            <Checkbox>Recovery</Checkbox>
                        </Control>
                        <Control>
                            <Checkbox>COGM</Checkbox>
                        </Control>
                    </Field>
                    <Field>
                        <Label>SPP File</Label>
                        <InputFile />
                    </Field>
                    <Field>
                        <Label>Comments</Label>
                        <Textarea></Textarea>
                    </Field>
                    <Field kind="group">
                        <Control>
                            <Button color="transparent" className="transparent">Cancel</Button>
                        </Control>
                        <Control>
                            <Button color="primary"  className="primary">Submit</Button>
                        </Control>
                    </Field>
                </form>
            </div>
        );
    }
}
