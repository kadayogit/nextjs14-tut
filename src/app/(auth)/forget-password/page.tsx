export default function FogetPassword() {
    return <div>
        <p>Forget Password!</p>
        <form action="#">
            <input type="text" name="name" id="name" placeholder="Enter email confirmation" />
            
            <button type="submit" className="border-none bg-red-700">Login</button>
            <p>we are sent you the confirmation your email!</p>
        </form>
    </div>
}