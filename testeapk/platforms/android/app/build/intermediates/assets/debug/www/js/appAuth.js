		//Pega os elementos
			const txtEmail  = document.getElementById('txtEmail');
			const txtPassword  = document.getElementById('txtPassword');
			const btnLogin  = document.getElementById('btnLogin');
			const btnSignUp = document.getElementById('btnSignUp');
			const btnLogOut = document.getElementById('btnLogOut');
			//const txt  = document.getElementById('txt');

		//Elementos de cadastro

		const txtCampoExtra = document.getElementById('txtCampoExtra');

		// Eventos de login
			btnLogin.addEventListener('click', e => {

			// Pega email e senha
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();


			
			// Login
			const promise = auth.signInWithEmailAndPassword(email, pass);
			promise.catch(e => alert(e.message));
		});


		// Eventos de cadastro
			btnSignUp.addEventListener('click', e => {

				// Pega email e senha
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();

			// Pega outros campos de cadastro

			const campoExtra = txtCampoExtra.value;


			//alert(campoExtra);

			//confirmaCadastro(campoExtra);
			
			// Login
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise
			.then(user => conseguiuSeCadastrar(user, email))
			.catch(e => recusaDeCadastro(e.message));

			});

		// Eventos de escuta em tempo real dos elementos

		// Sair

		btnLogOut.addEventListener('click', e => {
			firebase.auth().signOut();			
		});

		firebase.auth().onAuthStateChanged(fireBaseUser => {
			if(fireBaseUser){
				console.log(fireBaseUser);
				let botaoLogoutPage = window.document.getElementById('btnLogOut');

				if (botaoLogoutPage != null){
					//alert('null');
				}

				//document.getElementById('btnLogOut').style.display = "inline";
				//document.getElementById('app-content').style.display = "inline";

				if (paginaLogin == true) {
					window.location.href = "escolher.html";

					}
			}
				else{
					console.log('não logado');
				document.getElementById('btnLogOut').style.display = "none";
				if (paginaLogin != true) {
					window.document.write('');
					window.location.href = "login.html";

					}
				}
		})

		function conseguiuSeCadastrar($user, $email){
			localStorage.setItem("sys_user", $email);
			alert('Conseguiu se cadastrar '+$email);
		}

		function recusaDeCadastro($erro){
			alert('Cadastro recusado: '+$erro);
		}

		