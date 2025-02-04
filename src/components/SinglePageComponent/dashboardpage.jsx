import { Col, Container, Row, Card, CardHeader, CardBody } from "reactstrap";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Widgets from "../common/Widgets";
import BarChat from "../common/BarChat";
import DonutChat from "../common/DonutChart";
const DashboardPage = ({ module, pageTitle, dashboardData }) => {
    const [user, setUser] = useState({});
    const totalChats = dashboardData?.totalChats || 0;
    const serviceLevel = dashboardData?.serviceLevel || 0;
    const activeChat = dashboardData?.activeChat || 0;
    const chatInQueue = dashboardData?.chatInQueue || 0;
    const activeAgent = dashboardData?.activeAgent || 0;

    useEffect(() => {
        let userData = Cookies.get('user');
        if (userData) {
            try {
                const parsedUserData = JSON.parse(userData);
                setUser(parsedUserData);
            } catch (error) {
                console.error("Error parsing userData:", error);
            }
        } else {
            console.log("No user data found in cookies.");
        }
    }, []);

    // Get categories and series data from dashboard data
    const UserStatusCategories = dashboardData && dashboardData.UserStatus ? Object.keys(dashboardData.UserStatus) : [];
    const UserStatusSeriesData = dashboardData && dashboardData.UserStatus ? Object.values(dashboardData.UserStatus) : [];



    const categories = dashboardData && dashboardData.ChatsStatusOverall ? Object.keys(dashboardData.ChatsStatusOverall) : [];

    const series = [
        {
            name: 'Handled Chats',
            data: [dashboardData?.ChatsStatusOverall?.handledChats || 0], // Use the handledChats value
        },
        {
            name: 'Active Chats',
            data: [dashboardData?.ChatsStatusOverall?.activeChats || 0], // Use the activeChats value
        },
        {
            name: 'Inqueue Chats',
            data: [dashboardData?.ChatsStatusOverall?.inqueueChats || 0], // Use the inqueueChats value
        },
    ];

    const chatsPerDayData = dashboardData?.ChatsStatusPerDay || [];
    const chatsPerDayCategories = chatsPerDayData.map(item => item.chatDate);
    const chatsPerDaySeriesData = chatsPerDayData.map(item => item.totalChats);

    return (
        <>
            <Container fluid>
                <BreadCrumb title={pageTitle} pageTitle={module} />
                <Row>
                    <h5>Welcome back, {user.Name ? user.ame : "Guest"}!</h5>
                    <p>Here's what's happening with your business today.</p>
                    <Col lg={12}>
                    <Row>
                        <Widgets crmWidgets={[
                            {
                                "id": 1,
                                "label": "Total Chats",
                                "badge": "ri-arrow-up-circle-line text-success",
                                "icon": "ri-chat-voice-line fs-3 text-muted",
                                "counter": totalChats,
                                "decimals": "",
                                "suffix": "",
                                "prefix": ""
                            },
                            {
                                "id": 2,
                                "label": "Service Level",
                                "badge": "ri-arrow-up-circle-line text-success",
                                "icon": "ri-exchange-dollar-line fs-3 text-muted",
                                "counter": serviceLevel,
                                "decimals": 1,
                                "suffix": "",
                                "prefix": ""
                            },
                            {
                                "id": 3,
                                "label": "Active Chat(s)",
                                "badge": "ri-arrow-down-circle-line text-danger",
                                "icon": "ri-pulse-line",
                                "counter": activeChat,
                                "decimals": 0,
                                "suffix": "",
                                "prefix": ""
                            },
                            {
                                "id": 4,
                                "label": "Chat(s) in Queue",
                                "badge": "ri-arrow-up-circle-line text-success",
                                "icon": "ri-trophy-line",
                                "counter": chatInQueue,
                                "decimals": 0,
                                "prefix": "",
                                "separator": "",
                                "suffix": ""
                            },
                            {
                                "id": 5,
                                "label": "Active Agent(s)",
                                "badge": "ri-arrow-down-circle-line text-danger",
                                "icon": "las la-handshake fs-3 text-muted",
                                "counter": activeAgent,
                                "decimals": 0,
                                "separator": ",",
                                "suffix": "",
                                "prefix": ""
                            }
                        ]} />
                    </Row>
                    </Col>
                    <Col lg={12}>
                        {/* <Row> */}
                        <BarChat
                            dataColors='["--vz-primary"]'
                            name={"Chats Status (per day)"}
                            categories={chatsPerDayCategories}
                            series={[{ name: 'Total Chats', data: chatsPerDaySeriesData }]}
                            length={12}
                        />
                        {/* </Row> */}
                    </Col>
                    <Col lg={12}>
                        <Row>
                            <BarChat dashboardData={dashboardData} dataColors='["--vz-primary", "--vz-success", "--vz-secondary"]' name={"Chats Status(over all)"} categories={['']} series={series} length={6} />
                            <DonutChat categories={UserStatusCategories} seriesData={UserStatusSeriesData} dataColors='["--vz-primary", "--vz-success", "--vz-secondary"]' name={"Users Status"} />
                            {/* <BarChat series={series} dataColors='["--vz-primary", "--vz-success", "--vz-secondary"]' name={"Users Status"} /> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DashboardPage;

// import { Col, Container, Row } from "reactstrap";
// import BreadCrumb from "@/components/common/BreadCrumb";
// import { useEffect, useState } from "react";
// import Cookies from 'js-cookie';
// import Widgets from "../common/Widgets";
// import BarChat from "../common/BarChat";
// import DonutChat from "../common/DonutChart";

// const DashboardPage = ({ module, pageTitle, dashboardData }) => {
//     const [user, setUser] = useState({});
    
//     useEffect(() => {
//         const userData = Cookies.get('user');
//         if (userData) {
//             try {
//                 const parsedUserData = JSON.parse(userData);
//                 setUser(parsedUserData);
//             } catch (error) {
//                 console.error("Error parsing userData:", error);
//             }
//         } else {
//             console.log("No user data found in cookies.");
//         }
//     }, []);

//     console.log("Dashboard Data", dashboardData);

//     // Extract necessary data from the new payload structure
//     const totalChats = dashboardData?.data?.totalChats || 0;
//     const serviceLevel = dashboardData?.data?.serviceLevel || 0;
//     const chatStatus = dashboardData?.data?.chatStatus || [];
    
//     // Prepare data for charts
//     const chatsPerDayCategories = chatStatus.map(item => item.chatDate);
//     const chatsPerDaySeriesData = chatStatus.map(item => item.totalChats);
    
//     const series = [
//         {
//             name: 'Handled Chats',
//             data: [totalChats], // Use the totalChats value from the new payload
//         },
//         {
//             name: 'Service Level',
//             data: [serviceLevel], // Use the service level value from the new payload
//         },
//     ];

//     return (
//         <Container fluid>
//             <BreadCrumb title={pageTitle} pageTitle={module} />
//             <Row>
//                 <h5>Welcome back, {user.Name ? user.Name : "Guest"}!</h5>
//                 <p>Here's what's happening with your business today.</p>
//                 <Col lg={12}>
//                     <Row>
//                         <Widgets
//                             crmWidgets={[
//                                 {
//                                     id: 1,
//                                     label: "Total Chats",
//                                     badge: "ri-arrow-up-circle-line text-success",
//                                     icon: "ri-chat-voice-line fs-3 text-muted",
//                                     counter: totalChats.toString(),
//                                     decimals: 0,
//                                     suffix: "",
//                                     prefix: ""
//                                 },
//                                 {
//                                     id: 2,
//                                     label: "Service Level",
//                                     badge: "ri-arrow-up-circle-line text-success",
//                                     icon: "ri-exchange-dollar-line fs-3 text-muted",
//                                     counter: serviceLevel.toString(),
//                                     decimals: 1,
//                                     suffix: "",
//                                     prefix: ""
//                                 },
//                                 // Add other widgets here as needed
//                             ]}
//                         />
//                     </Row>
//                 </Col>
//                 <Col lg={12}>
//                     <BarChat
//                         dataColors='["--vz-primary"]'
//                         name={"Chats Status (per day)"}
//                         categories={chatsPerDayCategories}
//                         series={[{ name: 'Total Chats', data: chatsPerDaySeriesData }]}
//                         length={12}
//                     />
//                 </Col>
//                 <Col lg={12}>
//                     <Row>
//                         <BarChat
//                             dataColors='["--vz-primary", "--vz-success", "--vz-secondary"]'
//                             name={"Chats Status (Overall)"}
//                             categories={['Handled Chats', 'Service Level']}
//                             series={series}
//                             length={6}
//                         />
//                         <DonutChat
//                             categories={["Active Users", "Inqueue Users"]}
//                             seriesData={[5, 2]} // Example values for user statuses
//                             dataColors='["--vz-primary", "--vz-success", "--vz-secondary"]'
//                             name={"Users Status"}
//                         />
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default DashboardPage;
