import { Routes, Route } from 'react-router-dom';
import { CartScreen } from '../components/pages/Cart/CartScreen';
import { DashboardScreen } from '../components/pages/Dashboard/DashboardScreen';
import { RecipesScreen } from '../components/pages/Recipes/RecipesScreen';
import { NavBar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>                    
                <Route path="/" element={<DashboardScreen />} />
                <Route path="/recipes" element={<RecipesScreen />} >
                    <Route path=":recipeId" element={<RecipesScreen />} />
                </Route>
                <Route path="/recipes/cat/:catName" element={<RecipesScreen />}>
                    <Route path=":recipeId" element={<RecipesScreen />} />
                </Route>
                <Route path="/cart" element={<CartScreen />}></Route>
                <Route path="/cart/cat/:catName" element={<CartScreen />}></Route>

            </Routes>
        </>
    )
}