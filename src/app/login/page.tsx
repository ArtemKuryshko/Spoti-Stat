import LoginForm from "@/components/forms/LoginForm"
import Image from "next/image"

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col text-center items-center justify-center bg-black w-[1000] h-[600] rounded-[10] my-8">
				<div className="flex flex-col text-center items-center  justify-center mb-10">
					<Image src="/logo.svg" alt="logo" width="95" height="108" className="mb-4" />
					<h1 className="text-5xl font-bold mb-6">Welcome to Spoti-Stat!</h1>
				</div>
			</div>

			<LoginForm />
		</div>
	)
}
