"use client"
import { AuthServices } from "@/api/services";
import MainComponent from "@/components/Main"
import DashboardPage from "@/components/SinglePageComponent/dashboardpage";
import { useEffect, useState } from "react";

const DashboardContainer = () => {
  const [dashboardData, setDashboardData] = useState({})

  useEffect(() => {
    DashboardData();
  }, []);

  const DashboardData = async () => {
    try {
      const response = await AuthServices.Dashboard();
      const DashboadData = response.data;
      console.log("DashboadData==>", DashboadData);
      console.log("crmWidgets==>", DashboadData.WidgetsDetails);
      setDashboardData(DashboadData)
    } catch (error) {
      console.log("error")
    }
  };

  console.log("dashboardData==>", dashboardData)

  return (
    <>
      <DashboardPage
        module={"Dashboard"}
        pageTitle={"Insights"}
        crmWidgets={dashboardData?.WidgetsDetails}
        dashboardData={dashboardData}
        ChartType={"bar"}
      />
    </>
  )
}

export default DashboardContainer;