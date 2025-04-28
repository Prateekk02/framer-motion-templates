# Framer-Motion Dumps

## Button Animation

## Card Component 

## Sidebar Component

## Animation Hooks
### useScroll hook
- It is used for creating parallex scrolling.

### useTransform hook
- `useTransform()` is used to map an input value (like scrollYProgress) into a new output range (like opacity, scale, rotation) for smooth animations.
- Syntax:  
    ```javascript
    const output = useTransform(input, [inputRange], [outputRange])
    ```
- It is perfect for scroll effects, parallax, progress bars, and dynamic UI changes.

### useMotionTemplate
- `useMotionTemplate()` lets you create dynamic CSS strings (like transform: rotate(${x}deg)) by binding live animated values inside templates.
- Syntax: 
    ```javascript
    const style = useMotionTemplate string 
    ```
- It is ideal for building animated gradients, complex transforms, dynamic shadows, and inline CSS animations.
- Example
    ```javascript
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotateStyle = useMotionTemplate`rotate(${rotate}deg)`;
    <motion.div style={{ transform: rotateStyle }} />
    ```

### useSpring
- `useSpring()` smoothens rapid or jumpy value changes by applying natural spring physics like stiffness, damping, and mass.
- Syntax: 
    ```javascript
    const smoothValue = useSpring(value, { stiffness, damping, mass }) 
    ```
- It is perfect for making scroll-based animations, drag effects, and UI transitions feel fluid and realistic.
- Example 
    ```javascript
        const translateContent = useSpring(useTransform(scrollYProgress, [0,1], [-200,200]), {
        stiffness: 100,
        damping: 20,
        mass: 10
    });
    ```
- **stiffness** : How strong the spring pulls back to the target value, higher stiffness -> faster movements (feels tight and snappy).
- **damping** : How quickly the motion slows down (removes bounciness), higher damping → less bounce, stops faster.
- **mass** : How heavy the object feels during the motion, higher mass → moves slower and more "weighty"  