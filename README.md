# React Router v6: useParams Hook Error Outside Route Component

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook requires a routing context, which is only available within components rendered within `<Route>` or `<Routes>` components.

The `bug.js` file shows the incorrect implementation leading to an error, while `bugSolution.js` provides the corrected version.

## Problem

Accessing `useParams` outside a route-aware component results in an error because the routing context is unavailable.

## Solution

Ensure that the component using `useParams` is a child of a `<Route>` or `<Routes>` component.