import React, { createContext, useContext, useState, useEffect } from "react";
import { testUsers } from "../SampleData/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [editingUser, setEditingUser] = useState(null);

	useEffect(() => {
		setUsers(testUsers);
	}, []);

	const handleCreate = () => {
		const newUser = {
			id: users.length + 1,
			name: "",
			age: 10,
		};
		setUsers([...users, newUser]);
		setEditingUser(newUser);
	};

	const handleEdit = (user) => {
		setEditingUser(user);
	};

	const handleSave = () => {
		const updatedUsers = users.map((user) => {
			if (user.id === editingUser.id) {
				return { ...user, ...editingUser };
			}
			return user;
		});
		setUsers(updatedUsers);
		setEditingUser(null);
	};

	const handleDelete = (id) => {
		const updatedUsers = users.filter((user) => user.id !== id);
		setUsers(updatedUsers);
	};

	return (
		<UserContext.Provider
			value={{
				users,
				editingUser,
				handleCreate,
				handleEdit,
				handleSave,
				handleDelete,
				setEditingUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	return useContext(UserContext);
};

/*
    First of all, we need to initialize a context to pass state and related functions down to other components i.e Home in this case.
    Aik consumer bhi useContext hook sa banaliya for direct usage in Home
    Provider sa hamay add,edit,save and delete ka functions bhejnay ha + currentUsers, kon sa user edit horaha ha and usko manage kernay ka liya aik func

    for test hamnay kuch users phelay sa banaliya jo ka aik dafa users ma load kerliya using useEffect hook

    handleDelete -> pora users array ko filter kerlo on the basis of deleteId
    handleEdit -> isma bas hamay setEditingUser ka function ha jo editingUser ko manage kerta ha usma new user data push kerdo
    handleSave -> is ma phelay to new user array banao jis ma users + user jis ma edit hoa ha wo store ho, phir uska setUser ma bheja ka users update kerdo
                    and editing state sa bahir ajao
    handlecreate -> phelay to aik default structure banalo with user with fixed id and jesay hi data enter hojai to setUser ma pass kerdo and 
                    editing stage active kerdo to receive input

    setEditingUser -> is kaam ha jo bhi user edit horaha ha usko manage kerna takay uski values UI ma dekha sakhay
    


*/
