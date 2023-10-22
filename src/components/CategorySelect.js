export default function CategorySelect({ category, handleCategoryChange }) {
  return (
    <select value={category} onChange={handleCategoryChange}>
      <option value="all">All Categories</option>
      <option value="recipes">Recipes</option>
      <option value="lifestyle">Lifestyle</option>
    </select>
  )
}
