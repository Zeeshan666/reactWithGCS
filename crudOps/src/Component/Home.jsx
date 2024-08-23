import React from "react";
import { useUser } from "../Context/Context";

const Home = () => {
	const {
		users,
		editingUser,
		handleCreate,
		handleEdit,
		handleSave,
		handleDelete,
		setEditingUser,
	} = useUser();

	return (
		<>
			<button onClick={handleCreate}>Create New User</button>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>
								{user.id === editingUser?.id ? (
									<input
										type="text"
										value={editingUser.name}
										onChange={(e) =>
											setEditingUser({ ...editingUser, name: e.target.value })
										}
									/>
								) : (
									user.name 
								)}
							</td>
							<td>
								{user.id === editingUser?.id ? (
									<input
										type="number"
										value={editingUser.age}
										onChange={(e) =>
											setEditingUser({
												...editingUser,
												age: parseInt(e.target.value),
											})
										}
									/>
								) : (
									user.age
								)}
							</td>
							<td>
								{user.id === editingUser?.id ? (
									<button onClick={handleSave}>Save</button>
								) : (
									<>
										<button onClick={() => handleEdit(user)}>Edit</button>
										<button onClick={() => handleDelete(user.id)}>Delete</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Home;

/*
har user ka liya new row banani ha isliya tabledate ko .map ma wrap kara ha
*/