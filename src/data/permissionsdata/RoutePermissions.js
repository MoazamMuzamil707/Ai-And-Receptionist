const { Link } = require("react-router-dom");

// RoutePermissions.js
module.exports.RoutePermissions = [
    {
        label: "Menu",
        isHeader: true,
    },
    {
        id: 1,
        label: "Dashboard",
        icon: "ri-dashboard-2-line",
        hasChild: false,
        order: 1,
        link: "/Dashboard"
    },
    {
        id: 2,
        label: "Live Visitors",
        icon: "ri-team-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Live Visitors",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Visitors"
            },
            {
                id: 1,
                label: "Chats",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/History/Chats"
            },
            {
                id: 2,
                label: "Messages",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/History/Messages"
            }
        ],
    },
    {
        id: 3,
        label: "Chatbot",
        icon: "bi bi-robot",
        hasChild: false,
        order: 1,
        actions: [
            {
                name: "view",
                id: 1,
            },
            {
                name: "edit",
                id: 2,
            },
            {
                name: "delete",
                id: 3,
            }
        ],
        link: "/ChatBot"
    },
    {
        id: 4,
        label: "Whatsapp",
        icon: "ri-whatsapp-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Template",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    },
                    {
                        name: "view",
                        id: 1,
                    },
                    {
                        name: "update",
                        id: 2,
                    },
                    {
                        name: "delete",
                        id: 3,
                    }
                ],
                link: "/Whatsapp/Template"
            },
            {
                id: 2,
                label: "Broadcast",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Whatsapp/Broadcast"
            }
        ]
    },
    {
        id: 5,
        label: "AI",
        icon: "ri-ai-generate",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 2,
                label: "Knowledge Base",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/AI/Knowledgebase"
            }
        ]
    },
    {
        id: 6,
        label: "Email",
        icon: "ri-mail-send-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Templates",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Email/Template"
            },
            {
                id: 2,
                label: "Campaigns",
                order: 2,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Email/Campaigns"
            },
            {
                id: 3,
                label: "Mailing",
                order: 3,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Email/Mailing"
            }
        ]
    },
    {
        id: 7,
        label: "Push Notifications",
        icon: "ri-notification-2-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Notifications",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/List"
            },
            {
                id: 2,
                label: "Campaigns",
                order: 2,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/Campaigns"
            },
            {
                id: 3,
                label: "Responses",
                order: 3,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/Responses"
            },
            {
                id: 4,
                label: "Failed",
                order: 4,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/Failed"
            },
            {
                id: 5,
                label: "Segments",
                order: 5,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/Segments"
            },
            {
                id: 6,
                label: "Templates",
                order: 6,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/PushNotifications/Templates"
            }
        ]
    },
    // {
    //     id: 8,
    //     label: "NLP",
    //     icon: "ri-database-2-line",
    //     hasChild: true,
    //     order: 1,
    //     link: "#",
    //     subItems: [
    //         {
    //             id: 1,
    //             label: "Training Data",
    //             order: 1,
    //             actions: [
    //                 {
    //                     name: "add",
    //                     id: 1,
    //                 }
    //             ],
    //             link: "/Finetuning/ViewFinetuningDetails"
    //         }
    //     ]
    // },
    {
        id: 9,
        label: "Reports",
        icon: "ri-file-copy-2-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Service Level Reports",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/ServiceLevel"
            },
            {
                id: 2,
                label: "Chat Officer Activity Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/ChatOfficerActivity"
            },
            {
                id: 3,
                label: "Chat Summary Customer Wise Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/ChatSummaryCustomerWise"
            },
            {
                id: 4,
                label: "Consolidated Customer Feedback Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/ConsolidatedCustomerFeedback"
            },
            {
                id: 5,
                label: "Individual Customer Feedback Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/IndividualCustomerFeedback"
            },
            {
                id: 6,
                label: "Individual Customer Follow Up Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/IndividualCustomerFollowUp"
            },
            {
                id: 7,
                label: "After Chat WorkCode",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/AfterChatWorkCode"
            },
            {
                id: 8,
                label: "Chat Without Work Code Report",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Reports/ChatWithoutWorkCode"
            },
        ]
    },
    {
        id: 10,
        label: "Settings",
        icon: "ri-settings-line",
        hasChild: true,
        order: 1,
        link: "#",
        subItems: [
            {
                id: 1,
                label: "Roles",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Roles/List"
            },
            {
                id: 2,
                label: "Users",
                order: 1,
                actions: [
                    {
                        name: "view",
                        id: 1,
                    },
                    {
                        name: "edit",
                        id: 2,
                    },
                    {
                        name: "delete",
                        id: 2,
                    }
                ],
                link: "/User/Records"
            },
            {
                id: 3,
                label: "Templates",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Templates"
            },
            {
                id: 4,
                label: "Products",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Products"
            },
            {
                id: 5,
                label: "WorkCodes",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/WorkCodes"
            },
            {
                id: 6,
                label: "Onboarding",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Onboarding"
            },
            {
                id: 7,
                label: "Censored List",
                order: 1,
                actions: [
                    {
                        name: "add",
                        id: 1,
                    }
                ],
                link: "/Censored"
            }
        ]
    },
    {
        id: 1,
        label: "Change Password",
        icon: "mdi mdi-lock-reset",
        hasChild: false,
        order: 1,
        link: "/ChangePassword"
    },
];
