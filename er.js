document.getElementById("search-button").addEventListener("click", function () {
    const searchTerm = document.getElementById("search-input").value;
    
    // Simulated student data with additional fields
    const students = [
        { 
            regNo: "71052208001",
            rollNo: "22BAI001",
            name: "Anjali A",
            managementType: "Management",
            dateOfBirth: "02.12.2003",
            email: "anjalianand4404@gmail.com",
            gender: "Female",
            contactNumber: "6369904404",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208002",
            rollNo: "22BAI002",
            name: "Arjun P",
            managementType: "Management",
            dateOfBirth: "12/4/2004",
            email: "lnlvasanth2004@gmail.com",
            gender: "Male",
            contactNumber: "7094691029",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        // Add more student objects here for the remaining data
        { 
            regNo: "71052208003",
            rollNo: "22BAI003",
            name: "Arjun Vasanth A",
            managementType: "Management",
            dateOfBirth: "5/23/2000",
            email: "arjunraina71@gmail.com",
            gender: "Male",
            contactNumber: "9566632578",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208004",
            rollNo: "22BAI004",
            name: "Deroshan B",
            managementType: "Management",
            dateOfBirth: "4/3/2004",
            email: "deroshan703@gmail.com",
            gender: "Male",
            contactNumber: "9345850587",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208005",
            rollNo: "22BAI005",
            name: "Dhinesh Kumar E",
            managementType: "Dote",
            dateOfBirth: "19/07/2004",
            email: "esdinesh001@gmail.com",
            gender: "Male",
            contactNumber: "8680826625",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208006",
            rollNo: "22BAI006",
            name: "Dhivya R",
            managementType: "Dote",
            dateOfBirth: "1/9/2004",
            email: "dhivyaramesh71@gmail.com",
            gender: "Female",
            contactNumber: "9080357746",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208007",
            rollNo: "22BAI007",
            name: "Dhulasiram R",
            managementType: "Management",
            dateOfBirth: "16/05/2005",
            email: "cietaidhulasi07@gmail.com",
            gender: "Male",
            contactNumber: "6369675679",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208008",
            rollNo: "22BAI008",
            name: "Harish A",
            managementType: "Dote",
            dateOfBirth: "12/1/2004",
            email: "hharicoolboy@gmail.com",
            gender: "Male",
            contactNumber: "9025997204",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208009",
            rollNo: "22BAI009",
            name: "Harish Kumar A",
            managementType: "7.5",
            dateOfBirth: "6/2/2005",
            email: "arisri3205@gmail.com",
            gender: "Male",
            contactNumber: "6385330897",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208010",
            rollNo: "22BAI010",
            name: "Jebisha S",
            managementType: "Management",
            dateOfBirth: "12/1/2005",
            email: "jebisha589@gmail.com",
            gender: "Female",
            contactNumber: "9342538074",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208011",
            rollNo: "22BAI011",
            name: "Kaaviya N",
            managementType: "Dote",
            dateOfBirth: "7/3/2005",
            email: "nkaaviya1@gmail.com",
            gender: "Female",
            contactNumber: "9345444566",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208012",
            rollNo: "22BAI012",
            name: "Kabi Bala B",
            managementType: "Management",
            dateOfBirth: "01.11.2004",
            email: "kabib9658@gmail.com",
            gender: "Female",
            contactNumber: "9150119007",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208013",
            rollNo: "22BAI013",
            name: "Kanishka G",
            managementType: "Dote",
            dateOfBirth: "17/06/2004",
            email: "kanishkag8844@gmail.com",
            gender: "Female",
            contactNumber: "8148331706",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208014",
            rollNo: "22BAI014",
            name: "Karshavarthini M",
            managementType: "Dote",
            dateOfBirth: "11/8/2004",
            email: "kkarsha51@gmail.com",
            gender: "Female",
            contactNumber: "9790577186",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208015",
            rollNo: "22BAI015",
            name: "Kavinraj S",
            managementType: "Dote",
            dateOfBirth: "28.08.2004",
            email: "kavinrajsidd050@gmail.com",
            gender: "Male",
            contactNumber: "8015812190",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208016",
            rollNo: "22BAI016",
            name: "Kaviya C M",
            managementType: "Dote",
            dateOfBirth: "16.10.2003",
            email: "kaviyamohanraj1215@gmail.com",
            gender: "Female",
            contactNumber: "8438572915",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208017",
            rollNo: "22BAI017",
            name: "Lewin Jacob Lawrence",
            managementType: "Management",
            dateOfBirth: "5/18/2004",
            email: "lewinjacoblawrence@gmail.com",
            gender: "Male",
            contactNumber: "9400874889",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208018",
            rollNo: "22BAI018",
            name: "Logesh Kumar M",
            managementType: "Dote",
            dateOfBirth: "3/25/2004",
            email: "logeshmj25@gmail.com",
            gender: "Male",
            contactNumber: "9994008033",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208019",
            rollNo: "22BAI019",
            name: "Mohankumar M",
            managementType: "7.5",
            dateOfBirth: "2/24/2005",
            email: "MohanKumarm4pro@gmail.com",
            gender: "Male",
            contactNumber: "8072312828",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208020",
            rollNo: "22BAI020",
            name: "Moorthy M",
            managementType: "Dote",
            dateOfBirth: "13/11/2004",
            email: "moorthymoorthi222@gmail.com",
            gender: "Male",
            contactNumber: "9344065823",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208021",
            rollNo: "22BAI021",
            name: "Mouleeshwar G",
            managementType: "Dote",
            dateOfBirth: "3/6/2004",
            email: "ggkirubhaa@gmail.com",
            gender: "Male",
            contactNumber: "8148359714",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208022",
            rollNo: "22BAI022",
            name: "Mouli B",
            managementType: "Management",
            dateOfBirth: "7/21/2004",
            email: "mouligovarthanan@gmail.com",
            gender: "Male",
            contactNumber: "7904701552",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208023",
            rollNo: "22BAI023",
            name: "Mugilvannan L",
            managementType: "Dote",
            dateOfBirth: "29/05/2005",
            email: "mugil2927@gmail.com",
            gender: "Male",
            contactNumber: "9025833527",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208024",
            rollNo: "22BAI024",
            name: "Muhilan GR",
            managementType: "Management",
            dateOfBirth: "12/8/2004",
            email: "muhilanguru0088@gmail.com",
            gender: "Male",
            contactNumber: "6374379840",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208025",
            rollNo: "22BAI025",
            name: "Muthu Saravana Priya R",
            managementType: "Dote",
            dateOfBirth: "22/03/2005",
            email: "mspriya3022@gmail.com",
            gender: "Female",
            contactNumber: "6369456929",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208026",
            rollNo: "22BAI026",
            name: "Nagamani A",
            managementType: "7.5",
            dateOfBirth: "1/10/2004",
            email: "mnagu9477@gmail.com",
            gender: "Female",
            contactNumber: "6374224151",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208027",
            rollNo: "22BAI027",
            name: "Narain Karthikeyan",
            managementType: "Management",
            dateOfBirth: "6/28/2004",
            email: "narainkarthi28@gmail.com",
            gender: "Male",
            contactNumber: "8124947456",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208028",
            rollNo: "22BAI028",
            name: "Nithishkumar N",
            managementType: "Management",
            dateOfBirth: "3/8/2005",
            email: "kumarnithish21162@gmail.com",
            gender: "Male",
            contactNumber: "9790472140",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208029",
            rollNo: "22BAI029",
            name: "Pavan P",
            managementType: "Dote",
            dateOfBirth: "6/15/2005",
            email: "pavan.p2215@gmail.com",
            gender: "Male",
            contactNumber: "9345394807",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208030",
            rollNo: "22BAI030",
            name: "Ragul A",
            managementType: "Management",
            dateOfBirth: "19/07/2004",
            email: "ragulayyasamy714@gmail.com",
            gender: "Male",
            contactNumber: "9655118611",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208031",
            rollNo: "22BAI031",
            name: "Rahuman S",
            managementType: "Dote",
            dateOfBirth: "8/19/2004",
            email: "rahumanabdul8618@gmail.com",
            gender: "Male",
            contactNumber: "9025250350",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208032",
            rollNo: "22BAI032",
            name: "Rooben S R",
            managementType: "Dote",
            dateOfBirth: "17/09/2004",
            email: "roobenravee2004@gmail.com",
            gender: "Male",
            contactNumber: "8939593779",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208033",
            rollNo: "22BAI033",
            name: "Sahaya Gladwin J S",
            managementType: "Dote",
            dateOfBirth: "3/2/2005",
            email: "sahayagladwinjs@gmail.com",
            gender: "Male",
            contactNumber: "9629283029",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208035",
            rollNo: "22BAI035",
            name: "Sanjay C",
            managementType: "Dote",
            dateOfBirth: "4/6/2005",
            email: "sanjaychandiran@gmail.com",
            gender: "Male",
            contactNumber: "8870187764",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208037",
            rollNo: "22BAI037",
            name: "Shahithya R",
            managementType: "Management",
            dateOfBirth: "7/6/2004",
            email: "shahithya0607@gmail.com",
            gender: "Female",
            contactNumber: "7418706004",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208038",
            rollNo: "22BAI038",
            name: "Shamina R",
            managementType: "Management",
            dateOfBirth: "6/29/2005",
            email: "sshamina220@gmail.com",
            gender: "Female",
            contactNumber: "8248153167",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208039",
            rollNo: "22BAI039",
            name: "Shobana R",
            managementType: "Dote",
            dateOfBirth: "3/8/2004",
            email: "shobanarenga@gmail.com",
            gender: "Female",
            contactNumber: "9342528205",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208040",
            rollNo: "22BAI040",
            name: "Sowmya Narayanan R",
            managementType: "Management",
            dateOfBirth: "22/05/2004",
            email: "sowmyanarayanan2205@gmail.com",
            gender: "Male",
            contactNumber: "8838744464",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208041",
            rollNo: "22BAI041",
            name: "Sridhar V",
            managementType: "Management",
            dateOfBirth: "12/2/2004",
            email: "sridharviswakeshan@g",
            gender: "Male",
            contactNumber: "8838047855",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208042",
            rollNo: "22BAI042",
            name: "Suruthivimal S",
            managementType: "Dote",
            dateOfBirth: "6/9/2004",
            email: "suruthivimal999@gmail.com",
            gender: "Female",
            contactNumber: "6381738762",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208043",
            rollNo: "22BAI043",
            name: "Tamilarasan S",
            managementType: "Dote",
            dateOfBirth: "5/17/2005",
            email: "tamilarasan76667@gmail.com",
            gender: "Male",
            contactNumber: "9043472816",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208044",
            rollNo: "22BAI044",
            name: "Tania Thomas",
            managementType: "Management",
            dateOfBirth: "21/08/2004",
            email: "taniathomas790@gmail.com",
            gender: "Female",
            contactNumber: "8714771620",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208045",
            rollNo: "22BAI045",
            name: "Tharshini S",
            managementType: "Management",
            dateOfBirth: "3/11/2004",
            email: "tharshinisuresh443@gmail.com",
            gender: "Female",
            contactNumber: "6381934488",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208046",
            rollNo: "22BAI046",
            name: "Veera Dusyanth B",
            managementType: "Management",
            dateOfBirth: "1/15/2005",
            email: "veeradusyanth18@gmail.com",
            gender: "Male",
            contactNumber: "6379650039",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208047",
            rollNo: "22BAI047",
            name: "Venthan K Maha Deepak",
            managementType: "Management",
            dateOfBirth: "11/13/2004",
            email: "venthan13187@gmail. com",
            gender: "Male",
            contactNumber: "6383132749",
            ugPg: "UG",
            yearOfJoin: "2022"
        },
        { 
            regNo: "71052208048",
            rollNo: "22BAI048",
            name: "Vikash V R",
            managementType: "Management",
            dateOfBirth: "12/4/2005",
            email: "vikashvadivel1024@outlook.com",
            gender: "Male",
            contactNumber: "9486831712",
            ugPg: "UG",
            yearOfJoin: "2022"
        }
    ];

    // Search for the student by roll number
    const student = students.find((s) => s.rollNo === searchTerm);

    // Display the search result
    const resultContainer = document.getElementById("search-result");

    if (student) {
        resultContainer.innerHTML = `
            <h2>Student Details</h2>
            <ul>
                <li><strong>Registration Number:</strong> ${student.regNo}</li>
                <li><strong>Roll Number:</strong> ${student.rollNo}</li>
                <li><strong>Name:</strong> ${student.name}</li>
                <li><strong>Management Type:</strong> ${student.managementType}</li>
                <li><strong>Date of Birth:</strong> ${student.dateOfBirth}</li>
                <li><strong>Email ID:</strong> ${student.email}</li>
                <li><strong>Gender:</strong> ${student.gender}</li>
                <li><strong>Contact Number:</strong> ${student.contactNumber}</li>
                <li><strong>UG/PG:</strong> ${student.ugPg}</li>
                <li><strong>Year of Join:</strong> ${student.yearOfJoin}</li>
            </ul>
        `;
    } else {
        resultContainer.innerHTML = "<p>Student not found</p>";
    }
});
