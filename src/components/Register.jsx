import imageEther from '../images/ether.png';
function Register() {
	return (
		<div class="mt-5 pt-5 row ">
			<div class="align-items-center justify-content-center text-center">
				<img src={imageEther} class="mx-4 w-25 rounded mx-auto d-block"></img>
				<h1>Regístrate con Metamask plugin</h1>
				<a href="https://metamask.io/download/" class="link-primary text-center" target="_blank">
					Descarga aquí MetaMask
				</a>
			</div>
		</div>
	);
}

export default Register;
