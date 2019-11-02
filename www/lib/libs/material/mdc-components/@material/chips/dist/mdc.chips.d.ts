// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/base/component
//   ../../@material/ripple/component
//   ../../@material/ripple/types
//   ../../@material/base/foundation

declare module '@material/chips' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/chips/chip/index';
    export * from '@material/chips/chip-set/index';
}

declare module '@material/chips/chip/index' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/chips/chip/adapter';
    export * from '@material/chips/chip/component';
    export * from '@material/chips/chip/foundation';
    export * from '@material/chips/chip/types';
    export { cssClasses as chipCssClasses, strings as chipStrings } from '@material/chips/chip/constants';
}

declare module '@material/chips/chip-set/index' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/chips/chip-set/adapter';
    export * from '@material/chips/chip-set/component';
    export * from '@material/chips/chip-set/foundation';
    export { cssClasses as chipSetCssClasses, strings as chipSetStrings } from '@material/chips/chip-set/constants';
}

declare module '@material/chips/chip/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCChipAdapter {
            /**
                * Adds a class to the root element.
                */
            addClass(className: string): void;
            /**
                * Removes a class from the root element.
                */
            removeClass(className: string): void;
            /**
                * @return true if the root element contains the given class.
                */
            hasClass(className: string): boolean;
            /**
                * Adds a class to the leading icon element.
                */
            addClassToLeadingIcon(className: string): void;
            /**
                * Removes a class from the leading icon element.
                */
            removeClassFromLeadingIcon(className: string): void;
            /**
                * @return true if target has className, false otherwise.
                */
            eventTargetHasClass(target: EventTarget | null, className: string): boolean;
            /**
                * Emits a custom "MDCChip:interaction" event denoting the chip has been
                * interacted with (typically on click or keydown).
                */
            notifyInteraction(): void;
            /**
                * Emits a custom "MDCChip:selection" event denoting the chip has been selected or deselected.
                */
            notifySelection(selected: boolean): void;
            /**
                * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
                * interacted with (typically on click or keydown).
                */
            notifyTrailingIconInteraction(): void;
            /**
                * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
                */
            notifyRemoval(): void;
            /**
                * @return The computed property value of the given style property on the root element.
                */
            getComputedStyleValue(propertyName: string): string;
            /**
                * Sets the property value of the given style property on the root element.
                */
            setStyleProperty(propertyName: string, value: string): void;
            /**
                * @return Whether the chip has a leading icon.
                */
            hasLeadingIcon(): boolean;
            /**
                * @return The bounding client rect of the root element.
                */
            getRootBoundingClientRect(): ClientRect;
            /**
                * @return The bounding client rect of the checkmark element or null if it doesn't exist.
                */
            getCheckmarkBoundingClientRect(): ClientRect | null;
            /**
                * Sets the value of the attribute on the root element.
                */
            setAttr(attr: string, value: string): void;
    }
}

declare module '@material/chips/chip/component' {
    /**
        * @license
        * Copyright 2016 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCComponent } from '@material/base/component';
    import { MDCRipple, MDCRippleFactory } from '@material/ripple/component';
    import { MDCRippleCapableSurface } from '@material/ripple/types';
    import { MDCChipFoundation } from '@material/chips/chip/foundation';
    export type MDCChipFactory = (el: Element, foundation?: MDCChipFoundation) => MDCChip;
    export class MDCChip extends MDCComponent<MDCChipFoundation> implements MDCRippleCapableSurface {
            /**
             * Sets selected state on the chip.
             */
            selected: boolean;
            /**
             * Sets whether a trailing icon click should trigger exit/removal of the chip.
             */
            shouldRemoveOnTrailingIconClick: boolean;
            readonly ripple: MDCRipple;
            readonly id: string;
            static attachTo(root: Element): MDCChip;
            root_: HTMLElement;
            initialize(rippleFactory?: MDCRippleFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            /**
                * Begins the exit animation which leads to removal of the chip.
                */
            beginExit(): void;
            getDefaultFoundation(): MDCChipFoundation;
    }
}

declare module '@material/chips/chip/foundation' {
    /**
        * @license
        * Copyright 2016 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCFoundation } from '@material/base/foundation';
    import { MDCChipAdapter } from '@material/chips/chip/adapter';
    export class MDCChipFoundation extends MDCFoundation<MDCChipAdapter> {
            static readonly strings: {
                    ARIA_CHECKED: string;
                    CHECKMARK_SELECTOR: string;
                    ENTRY_ANIMATION_NAME: string;
                    INTERACTION_EVENT: string;
                    LEADING_ICON_SELECTOR: string;
                    REMOVAL_EVENT: string;
                    SELECTION_EVENT: string;
                    TRAILING_ICON_INTERACTION_EVENT: string;
                    TRAILING_ICON_SELECTOR: string;
            };
            static readonly cssClasses: {
                    CHECKMARK: string;
                    CHIP_EXIT: string;
                    HIDDEN_LEADING_ICON: string;
                    LEADING_ICON: string;
                    SELECTED: string;
                    TRAILING_ICON: string;
            };
            static readonly defaultAdapter: MDCChipAdapter;
            constructor(adapter?: Partial<MDCChipAdapter>);
            isSelected(): boolean;
            setSelected(selected: boolean): void;
            getShouldRemoveOnTrailingIconClick(): boolean;
            setShouldRemoveOnTrailingIconClick(shouldRemove: boolean): void;
            getDimensions(): ClientRect;
            /**
                * Begins the exit animation which leads to removal of the chip.
                */
            beginExit(): void;
            /**
                * Handles an interaction event on the root element.
                */
            handleInteraction(evt: MouseEvent | KeyboardEvent): void;
            /**
                * Handles a transition end event on the root element.
                */
            handleTransitionEnd(evt: TransitionEvent): void;
            /**
                * Handles an interaction event on the trailing icon element. This is used to
                * prevent the ripple from activating on interaction with the trailing icon.
                */
            handleTrailingIconInteraction(evt: MouseEvent | KeyboardEvent): void;
    }
    export default MDCChipFoundation;
}

declare module '@material/chips/chip/types' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export interface MDCChipInteractionEventDetail {
        chipId: string;
    }
    export interface MDCChipSelectionEventDetail extends MDCChipInteractionEventDetail {
        selected: boolean;
    }
    export interface MDCChipRemovalEventDetail extends MDCChipInteractionEventDetail {
        root: Element;
    }
    export interface MDCChipInteractionEvent extends Event {
        readonly detail: MDCChipInteractionEventDetail;
    }
    export interface MDCChipSelectionEvent extends Event {
        readonly detail: MDCChipSelectionEventDetail;
    }
    export interface MDCChipRemovalEvent extends Event {
        readonly detail: MDCChipRemovalEventDetail;
    }
}

declare module '@material/chips/chip/constants' {
    /**
      * @license
      * Copyright 2016 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export const strings: {
        ARIA_CHECKED: string;
        CHECKMARK_SELECTOR: string;
        ENTRY_ANIMATION_NAME: string;
        INTERACTION_EVENT: string;
        LEADING_ICON_SELECTOR: string;
        REMOVAL_EVENT: string;
        SELECTION_EVENT: string;
        TRAILING_ICON_INTERACTION_EVENT: string;
        TRAILING_ICON_SELECTOR: string;
    };
    export const cssClasses: {
        CHECKMARK: string;
        CHIP_EXIT: string;
        HIDDEN_LEADING_ICON: string;
        LEADING_ICON: string;
        SELECTED: string;
        TRAILING_ICON: string;
    };
}

declare module '@material/chips/chip-set/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCChipSetAdapter {
            /**
                * @return true if the root element contains the given class name.
                */
            hasClass(className: string): boolean;
            /**
                * Removes the chip with the given id from the chip set.
                */
            removeChip(chipId: string): void;
            /**
                * Sets the selected state of the chip with the given id.
                */
            setSelected(chipId: string, selected: boolean): void;
    }
}

declare module '@material/chips/chip-set/component' {
    /**
        * @license
        * Copyright 2016 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCComponent } from '@material/base/component';
    import { MDCChip, MDCChipFactory } from '@material/chips/chip/component';
    import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
    export class MDCChipSet extends MDCComponent<MDCChipSetFoundation> {
            static attachTo(root: Element): MDCChipSet;
            readonly chips: ReadonlyArray<MDCChip>;
            /**
                * @return An array of the IDs of all selected chips.
                */
            readonly selectedChipIds: ReadonlyArray<string>;
            /**
                * @param chipFactory A function which creates a new MDCChip.
                */
            initialize(chipFactory?: MDCChipFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            /**
                * Adds a new chip object to the chip set from the given chip element.
                */
            addChip(chipEl: Element): void;
            getDefaultFoundation(): MDCChipSetFoundation;
    }
}

declare module '@material/chips/chip-set/foundation' {
    /**
        * @license
        * Copyright 2017 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCFoundation } from '@material/base/foundation';
    import { MDCChipSetAdapter } from '@material/chips/chip-set/adapter';
    export class MDCChipSetFoundation extends MDCFoundation<MDCChipSetAdapter> {
            static readonly strings: {
                    CHIP_SELECTOR: string;
            };
            static readonly cssClasses: {
                    CHOICE: string;
                    FILTER: string;
            };
            static readonly defaultAdapter: MDCChipSetAdapter;
            constructor(adapter?: Partial<MDCChipSetAdapter>);
            /**
                * Returns an array of the IDs of all selected chips.
                */
            getSelectedChipIds(): ReadonlyArray<string>;
            /**
                * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
                */
            select(chipId: string): void;
            /**
                * Handles a chip interaction event
                */
            handleChipInteraction(chipId: string): void;
            /**
                * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
                */
            handleChipSelection(chipId: string, selected: boolean): void;
            /**
                * Handles the event when a chip is removed.
                */
            handleChipRemoval(chipId: string): void;
    }
    export default MDCChipSetFoundation;
}

declare module '@material/chips/chip-set/constants' {
    /**
      * @license
      * Copyright 2016 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export const strings: {
        CHIP_SELECTOR: string;
    };
    export const cssClasses: {
        CHOICE: string;
        FILTER: string;
    };
}

