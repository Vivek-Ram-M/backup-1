// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) ✅
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages ✅
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components ✅
// 4. Add properly working links to the MainNavigation ✅
// 5. Ensure that the links in MainNavigation receive an "active" class when active✅
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage ✅
// 7. Output the ID of the selected event on the EventDetailPage ✅
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import HomePage from "./components/HomePage";
import ErrorElement from "./components/ErrorElement";
import EventsPage, { eventsLoader } from "./components/EventsPage";
import EventDetailPage, {
  eventDeleteAction,
  eventDetailsLoader,
} from "./components/EventDetailPage";
import NewEventPage, { newEventsPageAction } from "./components/NewEventPage";
import EditEventPage from "./components/EditEventPage";
import { eventsFormAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./NewsletterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
        loader: eventsLoader,
      },

      {
        path: "events/:id",
        id: "event",
        loader: eventDetailsLoader,
        children: [
          {
            index: true,
            element: <EventDetailPage />,
            action: eventDeleteAction,
          },

          {
            path: "edit",
            element: <EditEventPage />,
            action: eventsFormAction,
          },
        ],
      },

      {
        path: "events/new",
        element: <NewEventPage />,
        action: eventsFormAction,
      },
    ],
  },
  {
    path: "newsletter",
    element: <NewsletterPage />,
    action: newsletterAction,
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainNavigation />,
//     errorElement: <ErrorElement />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "events",
//         element: <EventsPage />,
//         loader: eventsLoader,

//         children: [
//           {
//             path: ":id",
//             element: <EventDetailPage />,
//             loader: eventDetailsLoader,
//           },

//           {
//             path: "new",
//             element: <NewEventPage />,
//           },
//           {
//             path: ":id/edit",
//             element: <EditEventPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
