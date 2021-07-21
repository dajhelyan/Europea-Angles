
const data = [{
	products: {
		all: [
			{
				id: "0001",
				title: "vestido negro basico",
				description: "Vestido negro con manga 3/4",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/68/6d/3b/686d3b1fdd69b393a2497f2e162e7d22.jpg"
			},
			{
				id: "0002",
				title: "vestido imperiosa",
				description: "Vestido con cuello camireso rojo, blanco y negro en la parte superior y falda negra",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/a4/37/38/a4373847b993f824931c4605fc24f7a4.jpg"
			},
			{
				id: "0003",
				title: "vestido coctel",
				description: "Vestido coctel manga cero, tonos pasteles en la parte superior y falda negra",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/a5/6b/4e/a56b4ea0401eae2fac595fea11f62288.jpg"
			},
			{
				id: "0004",
				title: "vestido Elegante",
				description: "Vestido tono pastel beige con manga cero",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/d9/d0/14/d9d01465810f188ad2604ac525c603b7.jpg"
			},
			{
				id: "0005",
				title: "vestido Tany",
				description: "Vestido negro con rayas en tono beige y gris",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/5c/13/83/5c1383fa2bcea648706ab9d57d78bce4.jpg"
			},
			{
				id: "0006",
				title: "Jean Slim",
				description: "Jean neagro slim",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/fb/81/57/fb8157417e0edb3e72483b9883cf693c.jpg"
			},
			{
				id: "0007",
				title: "Jean Balenciaga",
				description: "Jean reacto color celeste vintage",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/44/60/4d/44604d8a0a4660fd719a81efccef2a9c.jpg"
			},
			{
				id: "0008",
				title: "Polazo blue",
				description: "Polazo color sky blue",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/de/2c/93/de2c9352d3646a8507086ec0d35dbf21.jpg"
			},
			{
				id: "0009",
				title: "Jean Jogger",
				description: "Jean jogger negro con basta regulable",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/12/d6/a5/12d6a54b1edc92b792e68efa2fe6d2ad.jpg"
			},
			{
				id: "0010",
				title: "Jean Selena",
				description: "Jean blanco con bastas acampanadas",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/c9/2e/a3/c92ea32a73b5344ad8e97bd2a9f1e9d1.jpg"
			},
			{
				id: "0011",
				title: "Crop Lacoste",
				description: "Crop top Lacoste negro con lazos",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/f8/77/47/f8774782bc6aff15690fb822e281c11c.jpg"
			},
			{
				id: "0012",
				title: "Polo Podium",
				description: "Polo Negro con cuello camisero y manga larga, color negro",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/d6/b7/83/d6b78370ceb8c59d93dc14d2814aee70.jpg"
			},
			{
				id: "0013",
				title: "Crop top Poplin",
				description: "Blusa crop top blanco con lazos ",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/95/5f/dd/955fdd64e9c32f8c6681bf9345543a58.jpg"
			},
			{
				id: "0014",
				title: "Top Sleeve",
				description: "Crop top de manga larga color verde",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/98/54/b8/9854b8fada6afba4d93f51ca598ef29a.jpg"
			},
			{
				id: "0015",
				title: "Crop top floral",
				description: "Crop top floral Hade",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/dc/6f/53/dc6f53955c878f987501274f3d70c5e6.jpg"
			}]
	},
	categories: {
		vestidos: [
			{
				id: "0001",
				title: "vestido negro basico",
				description: "Vestido negro con manga 3/4",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/68/6d/3b/686d3b1fdd69b393a2497f2e162e7d22.jpg"
			},
			{
				id: "0002",
				title: "vestido imperiosa",
				description: "Vestido con cuello camireso rojo, blanco y negro en la parte superior y falda negra",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/a4/37/38/a4373847b993f824931c4605fc24f7a4.jpg"
			},
			{
				id: "0003",
				title: "vestido coctel",
				description: "Vestido coctel manga cero, tonos pasteles en la parte superior y falda negra",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/a5/6b/4e/a56b4ea0401eae2fac595fea11f62288.jpg"
			},
			{
				id: "0004",
				title: "vestido Elegante",
				description: "Vestido tono pastel beige con manga cero",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/d9/d0/14/d9d01465810f188ad2604ac525c603b7.jpg"
			},
			{
				id: "0005",
				title: "vestido Tany",
				description: "Vestido negro con rayas en tono beige y gris",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/5c/13/83/5c1383fa2bcea648706ab9d57d78bce4.jpg"
			}
		],
		jeans: [
			{
				id: "0006",
				title: "Jean Slim",
				description: "Jean neagro slim",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/fb/81/57/fb8157417e0edb3e72483b9883cf693c.jpg"
			},
			{
				id: "0007",
				title: "Pantalon Resort",
				description: "Pantalon vintage",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/0a/36/8e/0a368e86716113bb347df6b17d3dd7a0.jpg"
			},
			{
				id: "0008",
				title: "Pantalon Punk",
				description: "Pantalon punk verde ",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/df/cc/78/dfcc78b11d3bb6b025311242367e55b4.jpg"
			},
			{
				id: "0009",
				title: "Jean Jogger",
				description: "Jean jogger negro con basta regulable",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/12/d6/a5/12d6a54b1edc92b792e68efa2fe6d2ad.jpg"
			},
			{
				id: "0010",
				title: "Jean Selena",
				description: "Jean blanco con bastas acampanadas",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/c9/2e/a3/c92ea32a73b5344ad8e97bd2a9f1e9d1.jpg"
			},
		],
		polos: [
			{
				id: "0001",
				title: "vestido negro basico",
				description: "Vestido negro con manga 3/4",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/68/6d/3b/686d3b1fdd69b393a2497f2e162e7d22.jpg"
			},
			{
				id: "0002",
				title: "vestido imperiosa",
				description: "Vestido con cuello camireso rojo, blanco y negro en la parte superior y falda negra",
				price: "180",
				pictureUrl: "https://i.pinimg.com/474x/a4/37/38/a4373847b993f824931c4605fc24f7a4.jpg"
			},
			{
				id: "0003",
				title: "vestido coctel",
				description: "Vestido coctel manga cero, tonos pasteles en la parte superior y falda negra",
				price: "100",
				pictureUrl: "https://i.pinimg.com/474x/a5/6b/4e/a56b4ea0401eae2fac595fea11f62288.jpg"
			},
			{
				id: "0004",
				title: "vestido Elegante",
				description: "Vestido tono pastel beige con manga cero",
				price: "140",
				pictureUrl: "https://i.pinimg.com/474x/d9/d0/14/d9d01465810f188ad2604ac525c603b7.jpg"
			},
			{
				id: "0005",
				title: "vestido Tany",
				description: "Vestido negro con rayas en tono beige y gris",
				price: "120",
				pictureUrl: "https://i.pinimg.com/474x/5c/13/83/5c1383fa2bcea648706ab9d57d78bce4.jpg"
			}
		],
	},
}
]

export default data
