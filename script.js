const min = 1;
		const max = 12;
		let liczba_królików;
		let liczba_owiec;
		let liczba_świń;
		let liczba_krów;
		let liczba_koni;
		let liczba_psow;
		let liczba_durzych_psow;
		
		
		function rzut_kosci(liczba_królików)
		{
		
			liczba_królików = document.getElementById("królik").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			liczba_świń = document.getElementById("świnia").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			liczba_koni = document.getElementById("koń").innerHTML;
			liczba_psow = document.getElementById("pies").innerHTML;
			liczba_durzych_psow = document.getElementById("duzy_pies").innerHTML;
			let zmienna = Number(liczba_królików)
			let owieczki = Number(liczba_owiec)
			let świnki = Number(liczba_świń)
			let krowa = Number(liczba_krów)
			let koń = Number(liczba_koni)
			let pies = Number(liczba_psow)
			let duzy_pies = Number(liczba_durzych_psow)
			const los_1 = liczba(min, max);
			let rzut_1 = 0;
			let rzut_2 = 0;
			
			
			if (los_1 >0 & los_1 <= 5)
			{document.getElementById("kość_1").innerHTML="królik"
			rzut_1 = 1}
			
			if (los_1 >=6 & los_1 <= 8)
			{document.getElementById("kość_1").innerHTML="owca"
			rzut_1 = 2}
			
			if (los_1 >=9 & los_1 <= 10)
			{document.getElementById("kość_1").innerHTML="świnia"
			rzut_1 = 3}
			
			if (los_1 == 11)
			{document.getElementById("kość_1").innerHTML="koń"
			rzut_1 = 4}
			
			if (los_1 == 12)
			{document.getElementById("kość_1").innerHTML="wilk"
			rzut_1 = 5}
			
			
			
			let los_2 = liczba(min, max);
			
			if (los_2 >0 & los_2 <= 5)
			{document.getElementById("kość_2").innerHTML="królik"
			rzut_2 = 1}
			
			if (los_2 >=6 & los_2 <= 8)
			{document.getElementById("kość_2").innerHTML="owca"
			rzut_2 = 2}
			
			if (los_2 >=9 & los_2 <= 10)
			{document.getElementById("kość_2").innerHTML="świnia"
			rzut_2 = 3}
			
			if (los_2 == 11)
			{document.getElementById("kość_2").innerHTML="krowa"
			rzut_2 = 4}
			
			if (los_2 == 12)
			{document.getElementById("kość_2").innerHTML="lis"
			rzut_2 = 5}
			
		{	//funkcej przy rzutach kości 
		
			{ //pierwsza kość
			if(rzut_1==1)
			{
				zmienna=równanie(zmienna);
				
				if(rzut_1==rzut_2)
				{zmienna=zmienna+1
				zmienna=Math.floor(zmienna);
				}
				zmienna=Math.ceil(zmienna);
			}
					
			if(rzut_1==2)
			{
				owieczki=równanie_owiec(owieczki);
				
				if(rzut_1==rzut_2)
				{owieczki=owieczki+1
				owieczki=Math.floor(owieczki);
				}
				owieczki=Math.ceil(owieczki);
			}
			
			if(rzut_1==3)
			{
				świnki=równanie_świnie(świnki);
				
				if(rzut_1==rzut_2)
				{świnki=świnki+1
				świnki=Math.floor(świnki);
				}
				świnki=Math.ceil(świnki);
			}
			
			if(rzut_1==4)
			{
				koń=równanie_koń(koń);
				
				//if(rzut_1==rzut_2)
				//{koń=koń+1
				//koń=Math.floor(koń);
				//}
				koń=Math.ceil(koń);
			}
			
			if(rzut_1==5)
			{
				if(duzy_pies>=1)
				{
					duzy_pies=duzy_pies-1;
				}
				else
				{
					owieczki = 0
					świnki = 0
					krowa = 0
					zmienna = 0
				}
				
			 
			 
			 
			kość_1.style.backgroundColor = "red";
			setTimeout(function(){kość_1.style.backgroundColor = "#FF00F7"}, 500);
			
			 

			}
			}
			
			
			{ //druga kość
			
			if(rzut_2==1)
			{
				if(rzut_1==rzut_2)
				{
				
				}
				else
				{
				zmienna=równanie(zmienna);
				
				zmienna=Math.ceil(zmienna);
				}
			}
					
			if(rzut_2==2)
			{
				if(rzut_1==rzut_2)
				{
				
				}
				else
				{
				owieczki=równanie_owiec(owieczki);
				
				owieczki=Math.ceil(owieczki);
				}
				
			}
			
			if(rzut_2==3)
			{
				if(rzut_1==rzut_2)
				{
				
				}
				else
				{
				świnki=równanie_świnie(świnki);
				
				świnki=Math.ceil(świnki);
				}
			}
			
			if(rzut_2==4)
			{
				if(rzut_1==rzut_2)
				{
				
				}
				else
				{
				krowa=równanie_krowa(krowa);
				
				krowa=Math.ceil(krowa);
				}
			}
			
			
			if(rzut_2==5)
			{
				if(pies>=1)
				{
					pies=pies-1;
				}
				else
				{
					zmienna = 0
				}
				kość_2.style.backgroundColor = "orange";
				setTimeout(function(){kość_2.style.backgroundColor = "#FF00F7"}, 500);
			}
			}
		}
		
			document.getElementById("królik").innerHTML=zmienna;
			document.getElementById("owca").innerHTML=owieczki;
			document.getElementById("świnia").innerHTML=świnki;
			document.getElementById("krowa").innerHTML=krowa;
			document.getElementById("koń").innerHTML=koń;
			document.getElementById("pies").innerHTML=pies;
			document.getElementById("duzy_pies").innerHTML=duzy_pies;
			
			
		}
		//liczba losowa
		
		
		//zamiana zwierząt w druga strone
	{
		
		function liczba(min, max) 
		{
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min +1)) + min;
		}
		
		function równanie_koń(koń)
		{
			let oblicznia=(koń)/2;
			koń=koń+oblicznia;

			return koń;
		}
		
		function równanie_krowa(krowa)
		{
			let oblicznia=(krowa)/2;
			krowa=krowa+oblicznia;

			return krowa;
		}
		
		function równanie_świnie(świnki)
		{
			let oblicznia=(świnki)/2;
			świnki=świnki+oblicznia;

			return świnki;
		}
		
		
		function równanie_owiec(owieczki)
		{
			let oblicznia=(owieczki)/2;
			owieczki=owieczki+oblicznia; 
			
			return owieczki;
		}
		
		
		function równanie(zmienna)
		{
			let oblicznia=(zmienna)/2;
			zmienna=zmienna+oblicznia;
			
			return zmienna;
		}
	}	
		
	{ //Tabela wymian zwierząt	
		function zamian_królików_owce(liczba_królików,liczba_owiec)
		{
			liczba_królików = document.getElementById("królik").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let zmienna = Number(liczba_królików)
			let owieczki = Number(liczba_owiec)
			if(zmienna>=6)
			{
			zmienna=zmienna-6;
			owieczki=owieczki+1;
			}
			
			document.getElementById("królik").innerHTML=zmienna;
			document.getElementById("owca").innerHTML=owieczki;
		}
		
		function zamian_owce_króliki(liczba_królików,liczba_owiec)
		{
			
			liczba_królików = document.getElementById("królik").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let zmienna = Number(liczba_królików)
			let owieczki = Number(liczba_owiec)
			if(owieczki>0)
			{
				zmienna=zmienna+6;
				owieczki=owieczki-1;
			}
			
			document.getElementById("królik").innerHTML=zmienna;
			document.getElementById("owca").innerHTML=owieczki;
		}
	
		function zamian_owce_świnie(liczba_świń,liczba_owiec)
		{
			
			liczba_świń = document.getElementById("świnia").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let świnki = Number(liczba_świń)
			let owieczki = Number(liczba_owiec)
			if(owieczki>=3)
			{
				świnki=świnki+1;
				owieczki=owieczki-3;
			}
			
			document.getElementById("świnia").innerHTML=świnki;
			document.getElementById("owca").innerHTML=owieczki;
		}
		
		
		function zamian_świnie_owce(liczba_świń,liczba_owiec)
		{
			
			liczba_świń = document.getElementById("świnia").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let świnki = Number(liczba_świń)
			let owieczki = Number(liczba_owiec)
			if(świnki>=1)
			{
				świnki=świnki-1;
				owieczki=owieczki+3;
			}
			
			document.getElementById("świnia").innerHTML=świnki;
			document.getElementById("owca").innerHTML=owieczki;
		}
		
		
		function zamian_świnie_krowa(liczba_świń,liczba_krów)
		{
			
			liczba_świń = document.getElementById("świnia").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			let świnki = Number(liczba_świń)
			let krowa = Number(liczba_krów)
			if(świnki>=2)
			{
				świnki=świnki-2;
				krowa=krowa+1;
			}
			
			document.getElementById("świnia").innerHTML=świnki;
			document.getElementById("krowa").innerHTML=krowa;
		}
		
		function zamian_krowa_świnie(liczba_świń,liczba_krów)
		{
			
			liczba_świń = document.getElementById("świnia").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			let świnki = Number(liczba_świń)
			let krowa = Number(liczba_krów)
			if(krowa>=1)
			{
				świnki=świnki+2;
				krowa=krowa-1;
			}
			
			document.getElementById("świnia").innerHTML=świnki;
			document.getElementById("krowa").innerHTML=krowa;
		}
		
		function zamian_krowa_konia(liczba_koni,liczba_krów)
		{
			
			liczba_koni = document.getElementById("koń").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			let koń = Number(liczba_koni)
			let krowa = Number(liczba_krów)
			if(krowa>=2)
			{
				koń=koń+1;
				krowa=krowa-2;
			}
			
			document.getElementById("koń").innerHTML=koń;
			document.getElementById("krowa").innerHTML=krowa;
		}
		
		function zamian_konia_krowa(liczba_koni,liczba_krów)
		{
			
			liczba_koni = document.getElementById("koń").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			let koń = Number(liczba_koni)
			let krowa = Number(liczba_krów)
			if(koń>=1)
			{
				koń=koń-1;
				krowa=krowa+2;
			}
			
			document.getElementById("koń").innerHTML=koń;
			document.getElementById("krowa").innerHTML=krowa;
		}
		
		function zamian_owcy_psa(liczba_psow,liczba_owiec)
		{
			
			liczba_psow = document.getElementById("pies").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let pies = Number(liczba_psow)
			let owca = Number(liczba_owiec)
			if(owca>=1)
			{
				owca=owca-1;
				pies=pies+1;
			}
			
			document.getElementById("pies").innerHTML=pies;
			document.getElementById("owca").innerHTML=owca;
		}
		
		function zamian_owcy_psa(liczba_psow,liczba_owiec)
		{
			
			liczba_psow = document.getElementById("pies").innerHTML;
			liczba_owiec = document.getElementById("owca").innerHTML;
			let pies = Number(liczba_psow)
			let owca = Number(liczba_owiec)
			if(owca>=1)
			{
				owca=owca-1;
				pies=pies+1;
			}
			
			document.getElementById("pies").innerHTML=pies;
			document.getElementById("owca").innerHTML=owca;
		}
		
		function zamian_krowy_duzy_pies(liczba_durzych_psow,liczba_krów)
		{
			
			liczba_durzych_psow = document.getElementById("duzy_pies").innerHTML;
			liczba_krów = document.getElementById("krowa").innerHTML;
			let duzy_pies = Number(liczba_durzych_psow)
			let krowa = Number(liczba_krów)
			if(krowa>=1)
			{
				krowa=krowa-1;
				duzy_pies=duzy_pies+1;
			}
			
			document.getElementById("duzy_pies").innerHTML=duzy_pies;
			document.getElementById("krowa").innerHTML=krowa;
		}
		
	}//Zodyfikuj kod by przy rzucie kości dwóch takich samych wartości(rzut_1==rzut_2) zaokróglało działanie w dół,
	// a przy rzucie tylko jednej wartości (rzut_1 lub rzut_2) zaokrąglało działanie w górę
	