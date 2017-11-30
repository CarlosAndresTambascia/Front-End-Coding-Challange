import React from "react"
import {Button, SideNav, Row, Input} from 'react-materialize'
import './co-side.css'


class Side extends React.Component {
    render() {
        return(
            <SideNav
                trigger={<Button>SIDE NAV DEMO</Button>}
                options={{ closeOnClick: true }}>
                <Row className='devSquare center-align'>
                    <p className='DEV-NAME'>Carlos Tambascia <br/> DNI 39.102.884 <br/> 22 YEARS OLD</p>
                </Row>
                <Row className='Search-in-cards'>
                    <Input s={20} label="Search in cards" validate/>
                </Row>
                <Row>
                    <p className='Filter-by '>Filter by</p>
                </Row>
                <Row className='FrontBack FrontMargin '>
                    <Input name='group1' type='radio' value='Frontend' label='Frontend' className='with-gap' />
                </Row>
                <Row className='FrontBack'>
                    <Input name='group1' type='radio' value='Backend' label='Backend' className='with-gap' />
                </Row>
            </SideNav>);

    }
    }


    export default Side;