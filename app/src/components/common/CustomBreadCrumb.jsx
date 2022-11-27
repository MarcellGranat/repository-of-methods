import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
export const CustomBreadcrumb = ({
  title,
  parentTitle,
  parentHref,
  grandparentTitle,
  grandparentHref,
}) => {
  return (
    <>
      <Breadcrumb
        my={["20px", "30px"]}
        color="#2E7B82"
        fontSize="sm"
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        pos="absolute"
        top={["60px", "60px", "60px", "4px"]}
        left={["20px", "20px", "20px", "260px"]}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Főoldal</BreadcrumbLink>
        </BreadcrumbItem>

        {/* on most pages breadcrumb has one parent menu, 
        but we can add one more level by specifying the `grandParent` props */}
        {grandparentTitle && grandparentHref && (
          <BreadcrumbItem>
            <BreadcrumbLink href={grandparentHref}>
              {grandparentTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {parentTitle && parentHref && (
          <BreadcrumbItem>
            <BreadcrumbLink href={parentHref}>{parentTitle}</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="unset" href="#">
            {title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
