import { FaDiscord, FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6"

export default function Footer(){
    return (
        <>
            <div className="bg-nav-gray px-8 py-6 flex justify-between items-center">
                <div>
                    <p>Privacy info</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex gap-4 text-2xl">
                    <a><FaDiscord /></a>
                    <a><FaInstagram /></a>
                    <a><FaMeta /></a>
                    <a><FaXTwitter /></a>
                </div>
            </div>
            <div className="bg-neutral text-neutral-content text-center p-2">
                <p>@copyright: Myself</p>
            </div>
        </>
    )
}
