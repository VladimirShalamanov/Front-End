import { useEffect } from "react";

export default function Contacts() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('2 seconds');
        }, 2000);
        // console.log(timeoutId);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <h2>Contact page</h2>

            <label htmlFor="">Title</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Description</label>
            <br />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br />
            <input type="submit" />
        </>
    );
}