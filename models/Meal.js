class Meal {
    constructor(
        id,
        categoryId, 
        title, 
        affortability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isVegitarian, 
        isLactoseFree
        ) {
            this.id=id,
            this.categoryId=categoryId,
            this.title=title,
            this.affortability= affortability,
            this.complexity= complexity,
            this.imageUrl= imageUrl,
            this.duration= duration,
            this.ingredients= ingredients,
            this.steps= steps,
            this.isGlutenFree= isGlutenFree,
            this.isVegan= isVegan,
            this.isVegitarian= isVegitarian,
            this.isLactoseFree= isLactoseFree
    }
}

export default Meal;