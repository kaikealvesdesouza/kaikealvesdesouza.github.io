	
	
	function selecionar(palavra){
		for(let i=0;i<table.length;i++)
		{
			for(let j=0;j<table[i][0].length;j++)
			{
				if(table[i][0][j]==palavra){
						//console.log(table[i][0][j]==palavra,table[i][1]);
					return table[i][1];
				}
			}
		}
	}

	function arrpush(arr,npt){
		let out = arr;
		for(let i=0;i<npt.length;i++)
		{
			out.push(npt[i]);
		}
		return out;
	}
	
	function substituir(words,word,neoword){
		for(let i=0;i<words.length;i++)
		{
			if(words[i] ==  word  ){
				regular = neoword;
				return regular;
			}
		}
	}
	
	function todososverbos(){
			vregulares=[];
		for(let i=0;i<portugues.length;i++)
		{	
				console.log(portugues[i]);
				let end = portugues[i].slice(-2);
				let pre = portugues[i].slice(0,portugues[i].length-2);
				if( end == "ar"){
					//Sonho Sonhei Sonharei Sonhado	
					let m1 = pre + "o";
					let m2 = pre + "ei";
					let m3 = pre + "arei";
					let m4 = pre + "ado";
					if(dicionario(m1) && dicionario(m2) && 
							dicionario(m3) && dicionario(m4))
					{
						vregulares.push(portugues[i]);
					}
				}
				if( end == "er"){
					//Sofro Sofri Sofrerei Sofreu
					let m1 = pre + "o";
					let m2 = pre + "i";
					let m3 = pre + "erei";
					let m4 = pre + "eu";
					if(dicionario(m1) && dicionario(m2) && 
							dicionario(m3) && dicionario(m4))
					{
						vregulares.push(portugues[i]);
					}
				}
				if( end == "ir"){
					//Divido Dividi Dividirei Dividiu
					let m1 = pre + "o";
					let m2 = pre + "i";
					let m3 = pre + "irei";
					let m4 = pre + "iu";
					if(dicionario(m1) && dicionario(m2) && 
							dicionario(m3) && dicionario(m4))
					{
						vregulares.push(portugues[i]);
					}
				}
		}
		return vregulares;
	}
	function eumverbo(word){
			let verbo = "";
			word=word.toLowerCase();
		for(let i=0;i<verbos.length;i++)
		{
			//Sonh –ar	Sofr –er	Divid –ir
				let end = verbos[i].slice(-2);
				let pre = verbos[i].slice(0,verbos[i].length-2);
				if( end == "ar"){
					//Sonho Sonhei Sonharei Sonhado	
					let m1 = pre + "o";
					let m2 = pre + "ei";
					let m3 = pre + "arei";
					let m4 = pre + "ado";
					if( m1  == word ||  m2  == word  ||  m3 == word ||  m4  == word ){
						verbo = verbos[i];
						return verbo;
					}
				}
				if( end == "er"){
					//Sofro Sofri Sofrerei Sofreu
					let m1 = pre + "o";
					let m2 = pre + "i";
					let m3 = pre + "erei";
					let m4 = pre + "eu";
					if( m1 == word || m2 == word  || m3 == word ||  m4 == word ){
						verbo = verbos[i];
						return verbo;
					}
				}
				if( end == "ir"){
					//Divido Dividi Dividirei Dividiu
					let m1 = pre + "o";
					let m2 = pre + "i";
					let m3 = pre + "irei";
					let m4 = pre + "iu";
					if( m1 == word || m2 == word  || m3 == word || m4 == word ){
						verbo = verbos[i];
						return verbo;
					}
				}
				
				if(verbos[i]==word){
					verbo = verbos[i];
					return verbo;
				}
		}
	}
	
	
	
	
	
	var words;
	
	function sanitizar(texto){
		//texo = texto.toString().replace(/\t/g, ' ').replace(/\n/g, ' ');
		words = texto.split(" ").filter(x =>x);
		outpt = [];
		for(let i=0; i< words.length;i++)
		{
			outpt=outpt.concat( words[i].toString().replace(/\t/g, ' ').replace(/\n/g, ' ').split(" ") );
		}
		return outpt.join(" ");
	}
	
