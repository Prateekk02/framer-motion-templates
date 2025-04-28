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