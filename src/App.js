import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreateTask from "./pages/CreateTask";
import AddDesignation from "./pages/AddDesignation";
import Review from "./pages/ReviewTask";
import Meetings from "./pages/Meetings";
import ReviewTaskForm from "./pages/ReviewTaskForm";
import ReviewTaskCard from "./pages/ReviewTaskCard";
import Forgot from "./pages/Forgot";
import Admin from "./pages/Admin";
import MembersInformation from "./pages/MembersInformation";
import SelectTeamMember from "./pages/SelectTeamMember";
import SelectDesignationMember from "./pages/SelectDesignationMember";
import Polls from "./pages/Polls";
import CreatePolls from "./pages/CreatePolls";
import Files from "./pages/Files";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import Homepage from "./pages/Homepage";
import Tasks from "./pages/Tasks";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <UserAuthContextProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route
              path="/admin/reviewtask"
              element={
                <ProtectedRoute>
                  <ReviewTaskCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/reviewtask/reviewtasklist"
              element={
                <ProtectedRoute>
                  <Review />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/reviewtask/reviewtasklist/reviewtaskform"
              element={
                <ProtectedRoute>
                  <ReviewTaskForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createUser"
              element={
                <ProtectedRoute>
                  <CreateUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createTask"
              element={
                <ProtectedRoute>
                  <CreateTask />
                </ProtectedRoute>
              }
            />
            <Route
              path="/meetings"
              element={
                <ProtectedRoute>
                  <Meetings />
                </ProtectedRoute>
              }
            />
            <Route path="/forgot" element={<Forgot />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/membersInformation"
              element={
                <ProtectedRoute>
                  <MembersInformation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddDesignation"
              element={
                <ProtectedRoute>
                  <AddDesignation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectTeamMembers"
              element={
                <ProtectedRoute>
                  <SelectTeamMember />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selectDesignationMembers"
              element={
                <ProtectedRoute>
                  <SelectDesignationMember />
                </ProtectedRoute>
              }
            />
            <Route
              path="/polls"
              element={
                <ProtectedRoute>
                  <Polls />
                </ProtectedRoute>
              }
            />
            <Route
              path="/createPolls"
              element={
                <ProtectedRoute>
                  <CreatePolls />
                </ProtectedRoute>
              }
            />
            <Route
              path="/files"
              element={
                <ProtectedRoute>
                  <Files />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userprofile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/files" element={<Files />} />
            <Route
              path="/reviewtaskcard"
              element={
                <ProtectedRoute>
                  <ReviewTaskCard />
                </ProtectedRoute>
              }
            />

          </Routes>
        </UserContext.Provider>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
