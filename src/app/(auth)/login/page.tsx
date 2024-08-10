export default function Login() {
    return <div>
        <p>Please login!</p>
        <form action="#">
            <input type="text" name="name" id="name" placeholder="Enter user" />
            <input type="password" name="password" id="password" placeholder="Enter password"/>
            <button type="submit" className="border-none bg-red-700">Login</button>
            <p>if you don't have an account please, <a href="/register">register</a></p>
        </form>
    </div>
}