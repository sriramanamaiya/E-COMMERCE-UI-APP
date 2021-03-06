import React from "react"
import { RouteComponentProps } from "react-router-dom"

import TabComp from "../Reuseable/TabComp"
import Login from "./Login"
import UserRegister from "./UserRegister"
import SupplierRegisterEdit from "./SupplierRegisterEdit"

const TabPage : React.FC<RouteComponentProps> = (props) => {
    const { path } = props.match
    console.log(path)

    enum TabTypeValue {
        LOGIN = "/login",
        REGISTER = "/register"
    }

    return (
        <>
            { path ===  TabTypeValue.LOGIN ? (
                <TabComp 
                    tabPanelValueOne="Customer" 
                    tabPanelValueTwo="Supplier" 
                    ComponentOne={Login} 
                    ComponentTwo={Login} 
                />
            ): (
                <>
                    { path === TabTypeValue.REGISTER && (
                        <TabComp 

                        tabPanelValueOne="Customer" 
                        tabPanelValueTwo="Supplier" 
                        ComponentOne={UserRegister} 
                        ComponentTwo={SupplierRegisterEdit} 
                    />
                ) }
                </>
            ) }
        </>
    )
}

export default TabPage