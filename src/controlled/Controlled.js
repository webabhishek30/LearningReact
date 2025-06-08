import { useState } from "react";

const Controlled = () => {

    const [form, setForm] = useState({name: "", email: "", password: ""});

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", form)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange} /> <br />
            <input type="email" name="email" value={form.email} onChange={handleChange} /><br />
            <input type="password" name="password" value={form.password} onChange={handleChange} /><br />
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Controlled;