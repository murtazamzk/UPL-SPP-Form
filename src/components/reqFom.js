import React, { Component } from 'react';

import { Field, Input, InputFile, Select, Checkbox, Label, Control, Textarea } from 'react-bulma-components/lib/components/form';
import { Columns } from 'react-bulma-components';
import Button from 'react-bulma-components/lib/components/button'

export default class reqForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectName : "",
            region : "Automobile",
            productionPlan:'Sunflower - Bolivia - Winter - Selling period - November - October (+1)',
            sclead : [
                ['Saleable Inventory / Parent Seed availability',false],
                ['Productivity',false],
                ['Recovery',false],
                ['COGM',false]
            ],
            spFile : false,
            commments : ""
        }
    }

    onChangeInput(fieldName,e){
        this.setState({
            [fieldName] : e.target.value
        });
    }

    onChangeChkBox(chkBoxkey,itemIndex){
        let checkBoxArr = this.state[chkBoxkey];
        checkBoxArr[itemIndex][1] = !checkBoxArr[itemIndex][1];
        this.setState({
            [chkBoxkey] : checkBoxArr
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
                            <Input id="pname" value={this.state.projectName} onChange={e => this.onChangeInput('projectName',e)} placeholder="Project Name" />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Region</Label>
                        <Control>
                            <Select value={this.state.region} onChange={e => this.onChangeInput('region',e)}>
                                <option>Automobile</option>
                                <option>Automobile 2</option>
                                <option>Automobile 3</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label>production Plan</Label>
                        <Control>
                            <Select value={this.state.productionPlan} onChange={e => this.onChangeInput('productionPlan',e)}>
                                <option>Sunflower - Bolivia - Winter - Selling period - November - October (+1)</option>
                                <option>Sunflower - Bolivia - Winter - Selling period - November - October (+2)</option>
                                <option>Sunflower - Bolivia - Winter - Selling period - November - October (+3)</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label>SC LEAD check points</Label>
                        {this.state.sclead.map((value,index) => 
                            <Control key={index} className={value[1] ? 'checked' : ''}>
                                <Checkbox value={value[0]} checked={value[1]} onChange={() => this.onChangeChkBox('sclead',index)}>{value[0]}</Checkbox>
                            </Control>
                        )}
                    </Field>
                    <Field>
                        <Label>SPP File</Label>
                        <InputFile />
                    </Field>
                    <Field>
                        <Label>Comments</Label>
                        <Textarea></Textarea>
                    </Field>
                    <Field kind="group" className="btn-wrapper">
                        <Control>
                            <Button className="transparent">Cancel</Button>
                        </Control>
                        <Control>
                            <Button color="primary"  className="primary">Submit Request</Button>
                        </Control>
                    </Field>
                </form>
            </div>
        );
    }
}
