import {
    Card,
    Input,
    // Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Example() {

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        location: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                location: credentials.location,
                password: credentials.password,
            })
        })
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            alert("Failed to create user")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className="flex justify-center align-middle w-screen h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} >
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" name="name" value={credentials.name} onChange={onChange} />
                        <Input size="lg" label="Email" name="email" value={credentials.email} onChange={onChange} />
                        <Input size="lg" label="Location" name="location" value={credentials.location} onChange={onChange} />
                        <Input type="text" size="lg" label="Password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Register
                    </Button>
                    {/* <Button className="mt-6" fullWidth>
                    <Link to="/login">Already A User</Link>
                    </Button> */}
                    <Button className="my-6" fullWidth><Link to="/login">Already a user</Link></Button>
                </form>
            </Card>
        </div>

    );
}