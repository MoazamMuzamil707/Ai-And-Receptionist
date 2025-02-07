"use client"

import AddEditRole from "@/containers/role/AddEditRole"

const EditRoles = () => {
    return (
        <>
            <AddEditRole 
              module={"Settings"}
              pageTitle={"Roles"}
              mode={'edit'}
            />
        </>
    )
}

export default EditRoles;