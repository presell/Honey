// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dGhXFrWhKMiTmf4n16zhxF
// Component: b3bY2GpgsYbvU-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Offer2 from "../../Offer2"; // plasmic-import: fY3LlGb9jfQSkJq/component
import Offer4 from "../../Offer4"; // plasmic-import: iKKsx8vJS-ZxVSM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_deployed_royal_honey_offer_component.module.css"; // plasmic-import: dGhXFrWhKMiTmf4n16zhxF/projectcss
import sty from "./PlasmicCollection7.module.css"; // plasmic-import: b3bY2GpgsYbvU-/css

export type PlasmicCollection7__VariantMembers = {};
export type PlasmicCollection7__VariantsArgs = {};
type VariantPropType = keyof PlasmicCollection7__VariantsArgs;
export const PlasmicCollection7__VariantProps = new Array<VariantPropType>();

export type PlasmicCollection7__ArgsType = {};
type ArgPropType = keyof PlasmicCollection7__ArgsType;
export const PlasmicCollection7__ArgProps = new Array<ArgPropType>();

export type PlasmicCollection7__OverridesType = {
  root?: p.Flex<"div">;
  offer2?: p.Flex<typeof Offer2>;
  offer4?: p.Flex<typeof Offer4>;
};

export interface DefaultCollection7Props {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCollection7__RenderFunc(props: {
  variants: PlasmicCollection7__VariantsArgs;
  args: PlasmicCollection7__ArgsType;
  overrides: PlasmicCollection7__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCollection7.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCollection7.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCollection7.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicCollection7.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicCollection7.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicCollection7.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <Offer2
              data-plasmic-name={"offer2"}
              data-plasmic-override={overrides.offer2}
              className={classNames("__wab_instance", sty.offer2)}
            />
          ) : null}
          <Offer4
            data-plasmic-name={"offer4"}
            data-plasmic-override={overrides.offer4}
            className={classNames("__wab_instance", sty.offer4)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "offer2", "offer4"],
  offer2: ["offer2"],
  offer4: ["offer4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  offer2: typeof Offer2;
  offer4: typeof Offer4;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollection7__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollection7__VariantsArgs;
    args?: PlasmicCollection7__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollection7__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollection7__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCollection7__ArgProps,
          internalVariantPropNames: PlasmicCollection7__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollection7__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollection7";
  } else {
    func.displayName = `PlasmicCollection7.${nodeName}`;
  }
  return func;
}

export const PlasmicCollection7 = Object.assign(
  // Top-level PlasmicCollection7 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    offer2: makeNodeComponent("offer2"),
    offer4: makeNodeComponent("offer4"),

    // Metadata about props expected for PlasmicCollection7
    internalVariantProps: PlasmicCollection7__VariantProps,
    internalArgProps: PlasmicCollection7__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Royal Honey",
      description:
        "Maximize  Stamina,  Size, and  Satisfaction in Just 20 Minutes!",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCollection7;
/* prettier-ignore-end */
