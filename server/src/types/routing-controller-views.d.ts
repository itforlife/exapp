interface IMainProps {
    users: [{ na: string }];
}
interface IAnotherViewProps {
    nam: string;
}

type IViewProps = {
    'Main.tsx': IMainProps;
    'IAnotherView.tsx': IAnotherViewProps;
};
type ViewsType = 'Main.tsx' | 'IAnotherView.tsx';
type DecoratedFnType<T> = (...any) => Promise<T>;
type RenderDecoratorType<D> = (
    target: any,
    property: any,
    descriptor: PropertyDescriptor
) => TypedPropertyDescriptor<DecoratedFnType<D>>;

declare module 'routing-controllers' {
    function Render<VT extends ViewsType>(
        view: VT
    ): RenderDecoratorType<IViewProps[VT]>;
}
