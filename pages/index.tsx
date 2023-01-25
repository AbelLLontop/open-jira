import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const HomePage:NextPage=()=> {
  // console.log(process.env.SECRET_KEY)
  // console.log(process.env.NEXT_PUBLIC_CLIENT_KEY)
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes" />
          <NewEntry/>
              <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="En progreso" />
            <EntryList status="in-progress"/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="Completado" />
            <EntryList status="finish"/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
