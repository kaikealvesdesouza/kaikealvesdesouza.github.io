/*let verbos = `amar
			comer
			partir
			falar
			estudar
			cantar
			correr
			vender
			beber
			escrever
			andar
			ficar
			chegar
			agir
			gostar
			brincar
			abrir
			viver
			comprar
			jogar
			corrigir
			passar
			receber
			viajar
			pensar
			conhecer
			assistir
			aprender
			dançar
			começar
			trabalhar
			encontrar
			precisar
			deixar
			dividir
			levar
			dever
			colorir
			voltar
			chamar
			voar
			pular
			entender
			passear
			nascer
			olhar
			parar
			achar
			usar
			lembrar
			dirigir
			esquecer
			morar
			acordar
			colocar
			proteger
			ganhar
			feder
			tomar
			esperar
			conjugar
			pegar
			descer
			morrer
			entrar
			fingir
			mexer
			contar
			possuir
			ajudar
			bater
			conversar
			cumprir
			mandar
			chover
			chorar
			continuar
			suar
			lavar
			doer
			doar
			acabar
			desejar
			imprimir
			existir
			decidir
			sonhar
			caminhar
			pagar
			falir
			procurar
			nadar
			atender
			acontecer
			mudar
			escolher
			entreter
			responder
			crescer
			perdoar
			fechar
			almoçar
			enviar
			desistir
			encher
			tornar
			participar
			parecer
			realizar
			vencer
			ligar
			permitir
			avisar
			terminar
			sentar
			demolir
			tirar
			buscar
			apresentar
			sofrer
			entregar
			criar
			casar
			levantar
			perceber
			adquirir
			perguntar
			agradecer
			convidar
			aceitar
			precaver
			tentar
			mostrar
			ensinar
			acreditar
			informar
			visitar
			pentear
			matar
			aparecer
			aproveitar
			beijar
			respeitar
			resolver
			tocar
			gritar
			incluir
			roer
			zoar
			surgir 
			pintar`.toString().replace(/\t/g, '').split("\n");
	*/
	
		//palavras a serem removidas do texto
	let banidas = ["a","de","em","por","per","da",
							"o","os","ao","aos","do","dos","no","nos",
							"pelo","pelos",
							"a","as","à","às","da","das","na","nas","pela","pelas",
							"uma","uns","dum","duns","duma", "dumas","num","nuns","numa","numas",
							"pelo", "pelos","pela","pelas",
							"que","como","para","pra"];
							
	let simbolos = [","];
	
	let verbohaver = ["hás","há","havemos","haveis","hão",
							"havia","havias","havia","havíamos","havíeis","haviam",
							"houve","houveste","houve","houvemos","houvestes","houveram",
							"houvera","houveras","houvera","houvéramos","houvéreis","houveram",
							"haverei","haverás","haverá","haveremos","havereis","haverão",
							"haveria","haverias","haveria","haveríamos","haveríeis","haveriam",
							"haja","hajas","haja","hajamos","hajais","hajam",
							"houvesse","houvesses","houvesse","houvéssemos","houvésseis","houvessem",
							"houver","houveres","houver","houvermos","houverdes","houverem",
							"há","haja","hajamos","havei","hajam",
							"hajas","haja","hajamos","hajais","hajam",
							"haver","haveres","haver","havermos","haverdes","haverem",
							"hei-o","há-lo","há-o","havemo-lo","havei-lo","hão-no",
							"havia-o","havia-lo","havia-o","havíamo-lo","havíei-lo","haviam-no",
							"houve-o","houveste-o","houve-o","houvemo-lo","houveste-lo","houveram-no",
							"houvera-o","houvera-lo","houvera-o","houvéramo-lo","houvérei-lo","houveram-no",
							"havê-lo-ei","havê-lo-ás","havê-lo-á","havê-lo-emos","havê-lo-eis","havê-lo-ão",
							"havê-lo-ia","havê-lo-ias","havê-lo-ia","havê-lo-íamos","havê-lo-íeis","havê-lo-iam",
							"haja","hajas","haja","hajamos","hajais","hajam",
							"houvesse","houvesses","houvesse","houvéssemos","houvésseis","houvessem",
							"houver","houveres","houver","houvermos","houverdes","houverem",
							"há-o","haja-o","hajamo-lo","havei-o","hajam-no",
							"hajas","haja","hajamos","hajais","hajam",
							"haver","haveres","haver","havermos","haverdes","haverem",
							"hei-me","hás-te","há-se","havemo-nos","haveis-vos","hão-se",
							"havia-me","havias-te","havia-se","havíamo-nos","havíeis-vos","haviam-se",
							"houve-me","houveste-te","houve-se","houvemo-nos","houvestes-vos","houveram-se",
							"houvera-me","houveras-te","houvera-se","houvéramo-nos","houvéreis-vos","houveram-se",
							"haver-me-ei","haver-te-ás","haver-se-á","haver-nos-emos","haver-vos-eis","haver-se-ão",
							"haver-me-ia","haver-te-ias","haver-se-ia","haver-nos-íamos","haver-vos-íeis","haver-se-iam",
							"haja","hajas","haja","hajamos","hajais","hajam",
							"houvesse","houvesses","houvesse","houvéssemos","houvésseis","houvessem",
							"houver","houveres","houver","houvermos","houverdes","houverem",
							"há-te","haja-se","hajamo-nos","havei-vos","hajam-se",
							"hajas","haja","hajamos","hajais","hajam",
							"haver-me","haveres-te","haver-se","havermo-nos","haverdes-vos","haverem-se"];




let verboser=["sou","era","fui",
							"és","eras","foste",
							"é","era","foi",
							"somos","éramos","fomos",
							"sois","éreis","fostes",
							"são","eram","foram",
							"fora","serei","seria",
							"foras","serás","serias",
							"fora","será","seria",
							"fôramos","seremos","seríamos",
							"fôreis","sereis","seríeis",
							"foram","serão","seriam",
							"seja","fosse","for",
							"sejas","fosses","fores",
							"seja","fosse","for",
							"sejamos","fôssemos","formos",
							"sejais","fôsseis","fordes",
							"sejam","fossem","forem",
							"sê","sejas",
							"seja","seja",
							"sejamos","sejamos",
							"sede","sejais",
							"sejam","sejam",
							"ser",
							"seres",
							"ser",
							"sermos",
							"serdes",
							"serem","será","sendo","sido"];
									// eu voce ele nós eles
					
	let pronomes = ["eu","você","ele","nós","você","eles"];

	let prnmsubs = [["mim", "me", "comigo",  "meu", "minha","meus", "minhas"],
								  ["te", "ti", "contigo",  "teu", "tua",   "teus", "tuas"],
									["se", "o", "a", "lhe", "si", "consigo"],
									["nos", "conosco",  "nosso", "nossos", "nossa", "nossas"],
									["vos", "convosco",  "vossa", "vosso", "vossos", "vossas"],
									["si", "os", "as", "lhes", "se", "consigo"]
									];
									//todos esses serão substuidos por that
	let demonstrativos=["isto","este","esta","estes","estas",
											"isso","esse","essa","esses","essas",
											"aquilo","aquele","aquela","aqueles","aquelas"];
											
											
	let pindefinidos = ["algum", "nenhum", "todo", "outro", "muito", "pouco", "certo", "vários", "tanto", "quanto", "qualquer", "alguém", "ninguém", "tudo", "nada", "cada", "demais", "algo"];
	
	let pronominal = ["seu","sua","seus","suas"];
	
	
	//"foram":"foi"
	//"iria":"ir",
	
	// substituições
	//"Será":"ir",
	var maisverbos = [
		"afirmar",
		"acreditar",
		"assessorar",
		"apreender",
		"criar",
		"divulgar",
		"declarar",
		"determinar", 
		"publicar",
		"piorar",
		"tentar",
		"ter"
		//,"ir" verbo com apenas duas letras causa um erro
		];
		
		//verbos = arrpush(verbos,maisverbos);
		
		let verboter = ["tenho", "tens", "tem", "temos", "tendes", "têm",
									"tenha", "tenhas", "tenha", "tenhamos", "tenhais", "tenham",
									"tem", "tenha", "tenhamos", "tende", "tenham",
									"tenhas", "tenha","tenhamos", "tenhais", "tenham",
									"tive", "tiveste", "teve", "tivemos", "tivestes", "tiveram",
									"tivera", "tiveras", "tivera", "tivéramos", "tivéreis", "tiveram",
									"tiver", "tiveres", "tiver", "tivermos", "tiverdes", "tiverem",
									"tivesse", "tivesses", "tivesse", "tivéssemos", "tivésseis", "tivessem",
									"terei", "terás", "terá", "teremos", "tereis", "terão",
									"teria", "terias", "teria", "teríamos", "teríeis", "teriam",
									"ter", "teres", "ter", "termos", "terdes", "terem",
									"tinha", "tinhas", "tinha", "tínhamos", "tínheis", "tinham",
									"ter", "tendo", "tido"];
		
		
		let labels = ["substativo","substituto"];
		let cols   = [[],[]];
		    cols[0][0]=banidas;
		    cols[0][1]=verbohaver;
		    cols[0][2]=verboser;
		    cols[0][3]=simbolos;
		    cols[0][4]=verboter;
		    cols[1][0]=" ";
		    cols[1][1]="hei";
		    cols[1][2]="ser";
		    cols[1][3]=" ";
		    cols[1][4]="ter";
		   let n=4;
		   for(let i=0; i<prnmsubs.length;i++)
		   {
		   		n++;
		   	  cols[0][n]=prnmsubs[i];
		   	  cols[1][n]=pronomes[i];
		   }
		   
		    cols[0][n+1]=demonstrativos;
		    cols[0][n+2]=pronominal;
		    cols[1][n+1]="este";
		    cols[1][n+2]=" "; 
		   
		    //rows=[cols[0][0],cols[1][0]]
		    //rows=[cols[0][1],cols[1][1]]
		var table = new Array(cols[0].length).fill([]);
		for(let j=0; j<cols[0].length;j++)
		{
			let row = [];
			for(let i=0;i<cols.length;i++)
			{
				row[i] = cols[i][j];
			}
			table[j] =row; 
		}
		
		console.log("tabela ",table);
	
