const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			test: "working",
			contactObj: [
				{
					fullname: "",
					phone: "",
					email: "",
					address: ""
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			GetInfo: (fullname, email, phone, address) => {
				const newInfo = {
					fullname: fullname.current.value,
					email: email.current.value,
					phone: phone.current.value,
					address: address.current.value
				};
				const storage = getStore();
				storage.contactObj.push(newInfo);
				setStore(storage);
			},
			saveInfo: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					body: JSON.stringify(contactObj),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
