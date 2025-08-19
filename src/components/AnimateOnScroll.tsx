import { Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactElement;
  delay?: number;
}

export default function AnimateOnScroll({ children, delay = 0 }: AnimateOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref}>
            <Fade in={inView} timeout={1000} style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}>
        <div>{children}</div>
      </Fade>
    </div>
  );
}
