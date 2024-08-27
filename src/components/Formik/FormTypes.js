
const FormTypes = {
    details: [
        { control: 'input', label: 'First Name', name: 'firstName' },
        { control: 'textarea', label: 'Bio', name: 'bio' },
        { control: 'select', label: 'City', name: 'city', options: [{ key: 'KARACHI', value: 'karachi' }, { key: 'Lahore', value: 'lahore' }, { key: 'Islamabad', value: 'islamabad' }] },
        { control: 'radio', label: 'Gender', name: 'gender', options: [{ key: 'Male', value: 'male' }, { key: 'Female', value: 'female' }] },
        { control: 'checkbox', label: 'Skills', name: 'skills', options: [{ key: 'HTML/CSS', value: 'html' }, { key: 'Javascript', value: 'javascript' }, { key: 'ReactJS', value: 'react' }] }, 
        { control: 'date', label: 'Date of Birth', name: 'dob' },
    ],

    login: [
        { control: 'input', label: 'Username', name: 'username' },
        { control: 'input', label: 'Password', name: 'password' },
    ]
    
};

export default FormTypes;
